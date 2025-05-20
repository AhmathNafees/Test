import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const actions = [
  { title: 'Pay someone', description: 'To wallet, bank or mobile number', icon: 'attach-money' },
  { title: 'Request money', description: 'Request money from users', icon: 'request-quote' },
  { title: 'Buy airtime', description: 'Top-up or send airtime across Africa', icon: 'phone-android' },
  { title: 'Pay bill', description: 'Zero transaction fees', icon: 'receipt' },
];

export default function ActionGrid() {
  return (
    <View style={styles.grid}>
      <Text style={{ color: '#555', marginBottom: 24}}>Here are some things you can do</Text>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <MaterialIcons name={action.icon} size={24} color="#000" style={styles.icon} />
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
    marginBottom:24,
    marginTop:-20,
  },
  card: {
    width: '48%',
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  icon: {
    marginBottom: 8,
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
