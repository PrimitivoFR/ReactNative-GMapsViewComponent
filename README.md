# ReactNative-GMapsViewComponent
A ReactNative component which allows you to generate a mini GMaps view for any postal address.

I use with on a Expo-RN app I'm currently working on.

![Screenshot](https://i.ibb.co/KNYBRjD/Screenshot-20200212-225529.jpg)

    npm i react-native-gmapsview

# How Do I Use This ?
Import it like this, and use it like in the example

    import { GMapsView } from 'react-native-gmapsview';

Also, you need to get an apiKey at https://developer.mapquest.com/documentation/open/ .
I use this awesome service to get lattitude and longitude coordinates from a postal address.

Finally, you need to setup your GMaps APIKEY in your app.json .

# Props
 - **address** : the postal address you want the marker to point to
 - **gMaps** : the gmaps link of this address, in case the user clicks on the view, it opens up Google Maps.
- **apiKey** : the api key you get at https://developer.mapquest.com/documentation/open/

# Example

    <GMapsView address="24 rue des poules, 67000 Strasbourg" gMaps="https://g.page/bluemoonstrasbourg?share" apiKey="123APIKEYblabla" />
