import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useFuelViewModel } from '../ViewModels/useFuelViewModel';

export default function FuelScreen() {
  const { fuelList, loading } = useFuelViewModel();

  if (loading) return <ActivityIndicator size="large" color="#007AFF" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kadıköy Akaryakıt Fiyatları</Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    elevation: 2, // Android gölge
  },
  brand: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
});
