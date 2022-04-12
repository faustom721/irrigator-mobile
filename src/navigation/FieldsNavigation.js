import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FieldsScreen from '../screens/FieldsScreen';
import PropertiesScreen from '../screens/PropertiesScreen';

const Stack = createStackNavigator();

export default function StatsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FieldsList'
        component={FieldsScreen}
        options={{ title: 'Plantaciones', headerShown: false }}
      />
      <Stack.Screen
        name='PropertiesList'
        component={PropertiesScreen}
        options={{ title: 'Propiedades' }}
      />
    </Stack.Navigator>
  );
}
