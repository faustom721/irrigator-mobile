import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'green',
    color: 'white',
  },
  spacing: {},
});

export default function FieldCard({ field }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Text>{field.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
