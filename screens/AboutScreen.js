import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
        {/* Titel til siden */}
      <Text style={styles.title}>ℹ️ Om appen</Text>

      {/* Lidt info om formålet med appen */}
      <Text style={styles.subtitle}>
        Denne app er lavet som en demo på en indkøbsliste.
      </Text>
      <Text>
        Du kan tilføje varer til listen og holde styr på dine indkøb.
        Enkel, hurtig og pæn i designet.
      </Text>
    </View>
  );
}
