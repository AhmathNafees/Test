import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const actions = [
  { title: 'Pay someone', description: 'To wallet, bank or mobile number' },
  { title: 'Request money', description: 'Request money from users' },
  { title: 'Buy airtime', description: 'Top-up or send airtime across Africa' },
  { title: 'Pay bill', description: 'Zero transaction fees' },
];

export default function ActionGrid() {
  return (
    <View style={styles.grid}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.title}>{action.title}</Text>
          <Text style={styles.desc}>{action.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: '48%',
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    color: '#555',
  },
});
