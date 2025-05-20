import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BalanceHeader() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={styles.header}>
      {/* Top Row: Greeting and Icon aligned left and right */}
      <View style={styles.topRow}>
        <Text style={styles.greeting}>Hi Ehi,</Text>
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={30}
          color="#000"
        />
      </View>

      {/* Balance */}
      <Text style={styles.balance}>1,234.00</Text>

      {/* Dropdown */}
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="GHS" value="GHS" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Push icon to right
    alignItems: 'center',
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
  picker: {
    height: 50,
    width: '40%',
  },
});
