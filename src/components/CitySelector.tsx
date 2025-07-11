// src/components/CitySelector.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/CitySelectorStyles';
import strings from '../constants/strings';

type Props = {
  cities: string[];
  selectedCity: string;
  onSelectCity: (city: string) => void;
};

export default function CitySelector({ cities, selectedCity, onSelectCity }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{strings.citySelector.label}</Text>
      
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
