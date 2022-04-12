import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StatsNavigation from './StatsNavigation';
import FieldsNavigation from './FieldsNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='FieldsHome'
        component={FieldsNavigation}
        options={{
          title: 'Plantaciones',
          tabBarLabel: 'Plantaciones',
          tabBarIcon: (color) => (
            <Icon name='seedling' color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name='StatsHome'
        component={StatsNavigation}
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
