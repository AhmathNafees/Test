import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BalanceHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hi Ehi,</Text>
      <Text style={styles.balance}>1,234.00 GHS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
});
