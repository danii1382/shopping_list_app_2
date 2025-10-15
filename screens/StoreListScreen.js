import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styles from '../styles/styles';

export default function StoreListScreen({ navigation }) {
  // Eksempeldata: Liste over butikker med navn, adresse og åbningstider
  const stores = [
    { id: 1, name: "Brugsen Platan", address: "Vesterbrogade 162, 1800 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 2, name: "Føtex City", address: "Rolighedsvej 11, 1950 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 3, name: "føtex Frederiksberg Centret", address: "Falkoner Alle 21, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 4, name: "Føtex Nordre Fasanvej", address: "Nordre Fasanvej 25, 2000 Frederiksberg", hours: "07:00 - 23:00" },
    { id: 5, name: "Kvickly", address: "Falkoner Alle 90-94, 2000 Frederiksberg", hours: "09:00 - 21:00" },
    { id: 6, name: "Lidl", address: "Nordre Fasanvej 27, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 7, name: "Netto", address: "Gl. Kongevej 123, 1850 Frederiksberg C", hours: "07:00 - 22:00" },
    { id: 8, name: "Netto", address: "Godthåbsvej 14, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 9, name: "Netto", address: "Falkoner Alle 1, 3, St, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 11, name: "Netto", address: "Finsensvej 34, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 12, name: "Netto", address: "Vesterbrogade 192, 1800 Frederiksberg C", hours: "07:00 - 22:00" },
    { id: 13, name: "Rema 1000", address: "Rosenørns Alle 31, 1970 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 14, name: "Rema 1000", address: "Smallegade 14, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 15, name: "Spar", address: "Frederiksberg Allé 53, 1820 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 16, name: "SuperBrugsen", address: "Finsensvej 14B, 2000 Frederiksberg", hours: "07:00 - 22:00" },
    { id: 17, name: "365 Discount", address: "Kingosgade 11, 1818 Frederiksberg C", hours: "07:00 - 22:00" }
  ];

  // Funktion til at vise hver butik i listen
  const renderStoreItem = ({ item }) => (
    <View style={styles.storeItem}>
      <Text style={styles.storeName}>{item.name}</Text>
      <Text style={styles.storeAddress}>{item.address}</Text>
      <Text style={styles.storeInfo}>Åbningstider: {item.hours}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Overskrift */}
      <Text style={styles.title}>🏪 Butiksliste</Text>

      {/* Underoverskrift / beskrivende tekst */}
      <Text style={styles.subtitle}>
        Find butikker i Frederiksberg Kommune
      </Text>

      {/* Viser alle butikker i en scroll-bar liste */}
      <FlatList
        data={stores} // datakilde til listen
        renderItem={renderStoreItem} // hvordan hvert element vises
        keyExtractor={(item) => item.id.toString()} // unikt nøgle-ID
        style={styles.storeList}
      />

      {/* Knap til at skifte til kortvisningen */}
      <View style={styles.buttonContainer}>
        <Button
          title="Se på kort"
          color="#27ae60"
          onPress={() => navigation.navigate('Map')}
        />
      </View>
    </View>
  );
}
