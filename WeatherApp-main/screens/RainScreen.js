import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function RainScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=48.86&lon=2.35&zoom=5' }}
        style={styles.map}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
