import React, { useState } from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import markerPng from '../images/marker.png'
import { api } from '../services/api';

interface IOrphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])
  const navigation = useNavigation()
 
  function handleDetails(id: number) {
    navigation.navigate('OrphanageDetails' as any, { id })
  }

  function handleCreate() {
    navigation.navigate('SelectMapPosition' as any)
  }

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

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

        {
          orphanages.map(orphanage => (
            <Marker
              key={orphanage.id}
              icon={markerPng}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
              calloutAnchor={{
                x: 2.5,
                y: 0.75
              }}
            >
              <Callout tooltip={true} 
                onPress={() => handleDetails(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>
                    { orphanage.name }
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))        
        }

      </MapView>   

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {
            orphanages.length && 
              `${orphanages.length} orfanatos encontrados`
          }
        </Text>

        <RectButton
          style={styles.createButton}
          onPress={handleCreate}
        >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>   
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
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1.5
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  createButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
