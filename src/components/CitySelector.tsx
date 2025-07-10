import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';



type Props = {
  selectedCity: string;
  onSelectCity: (city: string) => void;
};

const cities = ['istanbul', 'ankara', 'izmir'];

export default function CitySelector({ selectedCity, onSelectCity }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Şehir Seç</Text>
      <Picker
        selectedValue={selectedCity}
        onValueChange={(value) => onSelectCity(value)}
        style={styles.picker}
      >
        {cities.map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold' },
  picker: { height: 50, width: '100%' },
});
