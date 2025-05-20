import ActionGrid from '@/components/ActionGrid';
import BalanceHeader from '@/components/BalanceHeader';
import Favorites from '@/components/Favorites';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <BalanceHeader />
      <ActionGrid />
      <Favorites />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
