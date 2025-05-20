import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const favorites = [
  { name: 'Grace L.', image: require('../assets/grace.png') },
  { name: 'Lawrence A.', image: require('../assets/lawrence.png') },
];

export default function Favorites() {
  return (
    <View>
      <Text style={styles.label}>Your favorite people</Text>
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>+</Text>
          <Text style={styles.name}>Add</Text>
        </View>
        {favorites.map((person, idx) => (
          <View key={idx} style={styles.avatarContainer}>
            <Image source={person.image} style={styles.image} />
            <Text style={styles.name}>{person.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    fontSize: 24,
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: '#eee',
    borderRadius: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 12,
    marginTop: 4,
  },
});
