import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, Platform, Text, View } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class GMapsView extends React.Component {

  constructor(props) {
    super(props);
    this.strasbourgRegion = {
      latitude: 48.58392,
      longitude: 7.74553,
      latitudeDelta: 0.9522,
      longitudeDelta: 0.0021,
    }
    this.state = {
      position: Object,
    }
    this.urlMap = "http://open.mapquestapi.com/geocoding/v1/address?key=" + this.props.apiKey + "&location=";

  }

  getLatLng(address) {
    var urlToQuerry = this.urlMap + encodeURI(address)

    return fetch(urlToQuerry)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getLatLng(this.props.address).then(data => {


      var LatLng = data.results[0].locations[0].latLng;
      LatLng.latitude = LatLng.lat;
      LatLng.longitude = LatLng.lng;
      LatLng.latitudeDelta = this.strasbourgRegion.latitudeDelta;
      LatLng.longitudeDelta = this.strasbourgRegion.longitudeDelta;

      this.setState({ position: LatLng })

    })



  }

  componentDidUpdate() {

    this._map.animateToRegion({
      latitude: this.state.position.latitude + 0.0025,
      longitude: this.state.position.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }, 1000);
    this._marker.showCallout();

  }
  render() {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(this.props.gMaps)}>
        <View style={{ flex: 1, height: 100, width: "100%", padding: 5 }}>
          <MapView
            onPress={() => Linking.openURL(this.props.gMaps)}
            provider="google"
            initialRegion={this.strasbourgRegion}
            ref={(ref) => this._map = ref}
            style={{ flex: 1 }}>
            <Marker
              ref={(ref) => this._marker = ref}
              title={this.props.address}
              label={this.props.address}
              coordinate={{
                latitude: this.state.position.lat != undefined ? this.state.position.lat : 4,
                longitude: this.state.position.lng != undefined ? this.state.position.lng : 4
              }}>
              <View style={{ flexDirection: 'column' }}>
                <Icon name="map-marker" color="red" size={46} />
              </View>
              {Platform.OS === "ios" ? (
                <Callout
                  tooltip={true}
                  backgroundColor="#FAFAFA"
                  style={{ borderColor: 'black', borderWidth: 0.5 }}
                >
                  <View style={{ flex: 1, padding: 5 }}>
                    <Text numberOfLines={1} style={{ width: "100%", flex: 1, fontWeight: '500' }}>
                      {this.props.address}
                    </Text>
                  </View>

                </Callout>
              ) : null}
            </Marker>
          </MapView>
        </View>
      </TouchableOpacity>


    );
  }
}

export default GMapsView;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
