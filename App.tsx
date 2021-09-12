import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import markerPng from './src/images/marker.png'

export default function App() {
  return (
    <View style={styles.container}>      
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.9198944,
          longitude: -47.067326,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        <Marker
          icon={markerPng}
          coordinate={{
            latitude: -22.9198944,
            longitude: -47.067326,
          }}
        />
      </MapView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
