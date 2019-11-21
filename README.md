# ReactNative-GMapsViewComponent
A ReactNative component which allows you to generate a custom GMaps iframe for any postal address.

![Screenshot](https://i.ibb.co/cJLj2v5/Screenshot-20191120-171759-01.jpg)

    npm i react-native-gmapsview

# How Do I Use This ?
Import it like this, and use it like in the example

    import { GMapsView } from 'react-native-gmapsview';

# Props
 - **address** : the postal address you want the marker to point to
 - **gMaps** : the gmaps link of this address, in case the user clicks on the iframe, it opens up Google Maps.


# Example

    <GmapsView address="24 rue des poules, 67000 Strasbourg" gMaps="https://g.page/bluemoonstrasbourg?share" />
