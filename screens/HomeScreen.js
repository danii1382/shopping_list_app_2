import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        {/* Titel og kort intro */}
      <Text style={styles.title}>🛒 Indkøbslisten</Text>
      <Text style={styles.subtitle}>
        Hold styr på dine varer på en enkel og overskuelig måde
      </Text>

        {/* Knap til indkøbslisten */}
      <View style={styles.buttonContainer}>
        <Button
          title="Gå til indkøbslisten"
          color="#27ae60"
          onPress={() => navigation.navigate('List')}
        />
      </View>

      {/* Knap til butikskort */}
      <View style={styles.buttonContainer}>
        <Button
          title="Find butikker på kort"
          color="#e67e22"
          onPress={() => navigation.navigate('Map')}
        />
      </View>

      {/* Knap til butiksliste */}
      <View style={styles.buttonContainer}>
        <Button
          title="Butiksliste"
          color="#9b59b6"
          onPress={() => navigation.navigate('StoreList')}
        />
      </View>

        {/* Knap til "Om" siden */}
      <View style={styles.buttonContainer}>
        <Button
          title="Om appen"
          color="#2980b9"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
}
