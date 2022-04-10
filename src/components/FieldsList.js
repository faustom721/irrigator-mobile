import { FlatList, Text, StyleSheet } from 'react-native';
import React from 'react';

import FieldCard from './FieldCard';

const styles = StyleSheet.create({
  flatListContentContainer: { paddingHorizontal: 10 },
});

export default function FieldsList({ fields }) {
  return (
    <FlatList
      data={fields}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FieldCard field={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}
