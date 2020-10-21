import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapSearch from './pages/MapSearch';
import TreeFallData from './pages/CreateTreeFall/TreeFallData';
import SelectMapPosition from './pages/CreateTreeFall/SelectMapPosition';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="mapSearch" component={MapSearch} />
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{ headerShown: true, title: 'Selecione no mapa' }}
        />
        <Screen
          name="treeFallData"
          component={TreeFallData}
          options={{ headerShown: true, title: 'Informe os dados' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
