import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import { Feather } from '@expo/vector-icons';

import styles from '../styles/pages/mapSearch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MapSearch() {
  const navigation = useNavigation();

  const [initialRegion, setInitialRegion] = useState([0, 0]);

  useEffect(() => {
    async function loadPosition() {
      try {
        const { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
          Alert.alert('Precisamos de sua permissão para obter a localização');
          return;
        }
        const location = await Location.getCurrentPositionAsync({
          accuracy: 6,
        });
        const { latitude, longitude } = location.coords;

        setInitialRegion([latitude, longitude]);
      } catch (error) {
        Alert.alert(
          'Erro ao obter a localização, verifique se o GPS esta ligado'
        );
        console.log(error);
        return;
      }
    }
    loadPosition();
  }, [initialRegion]);

  function handleCreateTreeFall() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      {initialRegion[0] !== 0 && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: initialRegion[0],
            longitude: initialRegion[1],
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}
        >
          <Marker
            coordinate={{
              latitude: initialRegion[0],
              longitude: initialRegion[1],
            }}
          />
        </MapView>
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 árvores caídas encontradas</Text>
        <TouchableOpacity
          style={styles.createTreeFallButton}
          onPress={handleCreateTreeFall}
        >
          <Feather name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
