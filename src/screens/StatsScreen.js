import { View, Text } from 'react-native';
import React from 'react';

export default function StatsScreen() {
  return (
    <View>
      <Text>Estadísticasss</Text>
      <Text>{process.env.REACT_APP_BACKEND_HOS}</Text>
    </View>
  );
}
