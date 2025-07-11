import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FuelItem } from '../models/FuelItem';
import styles from '../styles/FuelCardStyles'
import strings from '../constants/strings';

type Props = {
  item: FuelItem;
};

export default function FuelCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.brand}>{strings.fuel.marka}</Text>
      <Text>{strings.fuel.benzin}: {item.benzin}₺</Text>
      <Text>{strings.fuel.katkili}: {item.katkili}₺</Text>
    </View>
  );
}

