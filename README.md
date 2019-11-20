# ReactNative-GMapsViewComponent
A ReactNative component which allows you to generate a custom GMaps iframe for any postal address.

![Screenshot](https://i.ibb.co/cJLj2v5/Screenshot-20191120-171759-01.jpg)

# How Do I Use This ?
Just paste this only .js file in your React Native project, and import the component where you wanna use it.

    import GMapsView from '../yourpath';
# Props
 - **address** : the postal address you want the marker to point to
 - **gMaps** : the gmaps link of this address, in case the user clicks on the iframe, it opens up Google Maps.
 # Example

    <GmapsView address="24 rue des poules, 67000 Strasbourg" gMaps="https://g.page/bluemoonstrasbourg?share" />