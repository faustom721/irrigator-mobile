import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Stats from '../screens/Stats';
import FieldsList from '../screens/FieldsList';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='FieldsList'
        component={FieldsList}
        options={{
          title: 'Plantaciones',
          tabBarLabel: 'Plantaciones',
          tabBarIcon: (color) => (
            <Icon name='seedling' color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name='Stats'
        component={Stats}
        options={{
          title: 'Estadísticas',
          tabBarLabel: 'Estadísticas',
          tabBarIcon: (color) => (
            <Icon name='chart-bar' color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
