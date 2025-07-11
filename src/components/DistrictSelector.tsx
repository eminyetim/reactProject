import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/DistrictSelectorStyles';
import strings from '../constants/strings';
type Props = {
  districts: string[];
  selectedDistrict: string;
  onSelectDistrict: (district: string) => void;
};

export default function DistrictSelector({ districts, selectedDistrict, onSelectDistrict }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{strings.districtSelector.label}</Text>
      <Picker
        selectedValue={selectedDistrict}
        onValueChange={(value) => onSelectDistrict(value)}
        style={styles.picker}
      >
        {districts.map((district) => (
          <Picker.Item key={district} label={district} value={district} />
        ))}
      </Picker>
    </View>
  );
}
