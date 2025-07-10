import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFuelViewModel } from '../ViewModels/useFuelViewModel';
import styles from '../styles/fuel_styles';
import CitySelector from '../components/CitySelector';
import DistrictSelector from '../components/DistrictSelector';

export default function FuelScreen() {
  const [city, setCity] = useState('istanbul');
  const [district, setDistrict] = useState('kadikoy');

  const { fuelList, loading } = useFuelViewModel(city, district);

  if (loading) return <ActivityIndicator size="large" color="#007AFF" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{district} Akaryakıt Fiyatları</Text>

      <CitySelector selectedCity={city} onSelectCity={setCity} />
      <DistrictSelector city={city} selectedDistrict={district} onSelectDistrict={setDistrict} />

      <FlatList
        data={fuelList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.brand}>{item.marka}</Text>
            <Text>Benzin: {item.benzin}₺</Text>
            <Text>Katkılı Benzin: {item.katkili}₺</Text>
          </View>
        )}
      />
    </View>
  );
}
