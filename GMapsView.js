import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Dimensions, WebView,Linking,TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class GMapsView extends React.Component {
	
	strFIN = '';
	constructor(props)
	{
	    super(props)
	    this.state = { str: '' }
	}
	
  createIframeMapsAddressPortion()
  {
      const newString = this.props.address.replace(",", "");
      const newString2 = newString.trim();
      const splitString = newString2.split(" ");
      var str ='';
      for (let i = 0; i < splitString.length; i++) {
          if (i !== splitString.length-1)
          {
            str = str+splitString[i]+'%20';  
          }
          else
          {
            str = str+splitString[i]
          }
      }
      this.strFIN = str ;
  }
  componentWillMount(){
    this.createIframeMapsAddressPortion();
  }
  render(){
    return (
    <TouchableOpacity onPress={() => Linking.openURL(this.props.gmaps)}>
      <WebView 
      	originWhitelist={['*']}
      	style={{height:100,width:'100%'}}
        source={{ html: '<iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q='+this.strFIN+'+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="border:0;" allowfullscreen="" frameborder="0" ></iframe>' }}
      />
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
  },
});
