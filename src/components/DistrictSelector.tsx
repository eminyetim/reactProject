import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


type Props = {
  selectedDistrict: string;
  onSelectDistrict: (district: string) => void;
  city: string;
};

const districtMap: { [key: string]: string[] } = {
  istanbul: ['kadikoy', 'besiktas', 'uskudar', 'tuzla'],
  ankara: ['cankaya', 'kecioren'],
  izmir: ['konak', 'bornova'],
};

export default function DistrictSelector({ selectedDistrict, onSelectDistrict, city }: Props) {
  const districts = districtMap[city] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>İlçe Seç</Text>
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

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold' },
  picker: { height: 50, width: '100%' },
});
