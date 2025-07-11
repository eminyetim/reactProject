import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import  styles from '../styles/HomeStyles';
import strings from '../constants/strings';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Button title={strings.home.goToFuel} onPress={() => navigation.navigate('Fuel')} />
    </View>
  );
}

