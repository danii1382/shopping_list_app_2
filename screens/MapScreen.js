import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from '../styles/styles';

export default function MapScreen({ navigation }) {
  // Standardområde for kortet (centreret på København)
  const [region, setRegion] = useState({
    latitude: 55.6761,
    longitude: 12.5683,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // State til at gemme brugerens aktuelle position
  const [location, setLocation] = useState(null);
  // State til at håndtere fejlbeskeder (f.eks. manglende tilladelser)
  const [errorMsg, setErrorMsg] = useState(null);

  // Eksempeldata: Liste over butikker med navn og koordinater
  const [stores] = useState([
    { id: 1, name: "Brugsen Platan", latitude: 55.67084305557645, longitude: 12.53934240213665 },
    { id: 2, name: "Føtex City", latitude: 55.685286880427725, longitude: 12.54001364741059 },
    { id: 3, name: "føtex Frederiksberg Centret", latitude: 55.681749640038255, longitude: 12.532660470911898 },
    { id: 4, name: "Føtex Nordre Fasanvej", latitude: 55.68220336065753, longitude: 12.522563809019411 },
    { id: 5, name: "Kvickly", latitude: 55.68610805513673, longitude: 12.539526218137544 },
    { id: 6, name: "Lidl", latitude: 55.68259303134171, longitude: 12.52329289870631 },
    { id: 7, name: "Netto", latitude: 55.67637914155967, longitude: 12.54173329190815 },
    { id: 8, name: "Netto", latitude: 55.67128277742965, longitude: 12.534396269833428 },
    { id: 9, name: "Netto", latitude: 55.68632335963375, longitude: 12.536388441386032 },
    { id: 11, name: "Netto", latitude: 55.67903665950265, longitude: 12.533570247459663 },
    { id: 12, name: "Netto", latitude: 55.68187943139916, longitude: 12.51634419622999 },
    { id: 13, name: "Rema 1000", latitude: 55.6829370566125, longitude: 12.55060805713067 },
    { id: 14, name: "Rema 1000", latitude: 55.67930779414046, longitude: 12.530936763153722 },
    { id: 15, name: "Spar", latitude: 55.67424113322015, longitude: 12.537770167767354 },
    { id: 16, name: "SuperBrugsen", latitude: 55.681722439648155, longitude: 12.518861138972301 },
    { id: 17, name: "365 Discount", latitude: 55.67319877715169, longitude: 12.54459550374756 }
  ]);

  // Anmod om tilladelse til at bruge brugerens lokation
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Tilladelse til at bruge lokation blev nægtet');
        return;
      }

      // Hent brugerens aktuelle position
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Opdater kortets område til brugerens position
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Butikker på kort</Text>
      
      {/* Container til kortvisningen */}
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map} 
          region={region}
          showsUserLocation={true} // Den blå prik viser, hvor brugeren befinder sig
        >
          {/* Opret markører for hver butik i listen */}
          {stores.map(store => (
            <Marker
              key={store.id}
              coordinate={{
                latitude: store.latitude,
                longitude: store.longitude
              }}
              title={store.name}
              description="Butik"
            />
          ))}
        </MapView>
      </View>

      {/* Knap til at gå til butiksliste-skærmen */}
      <View style={styles.buttonContainer}>
        <Button
          title="Butiksliste"
          color="#2980b9"
          onPress={() => navigation.navigate('StoreList')}
        />
      </View>

      {/* Viser eventuelle fejlbeskeder (fx manglende tilladelser) */}
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
}
