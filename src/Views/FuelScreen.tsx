import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFuelViewModel } from '../viewModels/UseFuelViewModel';
import styles from '../styles/FuelStyles';
import CitySelector from '../components/CitySelector';
import DistrictSelector from '../components/DistrictSelector';
import FuelCar from '../components/FuelCard';
import FuelCard from '../components/FuelCard';

const availableCities = ['istanbul', 'ankara', 'izmir'];
const availableDistricts: { [key: string]: string[] } = {
  istanbul: ['kadikoy', 'besiktas', 'uskudar', 'tuzla'],
  ankara: ['cankaya', 'kecioren'],
  izmir: ['konak', 'bornova'],
};

export default function FuelScreen() {
  const [city, setCity] = useState('istanbul');
  const [district, setDistrict] = useState('kadikoy');
  const { fuelList, loading } = useFuelViewModel(city, district);

  const districtsForCity = availableDistricts[city] || [];

  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity);
    const defaultDistrict = availableDistricts[selectedCity]?.[0] || '';
    setDistrict(defaultDistrict);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{district} Akaryakıt Fiyatları</Text>

      <CitySelector cities={availableCities} selectedCity={city} onSelectCity={handleCityChange} />
      <DistrictSelector districts={districtsForCity} selectedDistrict={district} onSelectDistrict={setDistrict} />

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={fuelList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <FuelCard item={item} />}
        />
      )}
    </View>
  );
}
