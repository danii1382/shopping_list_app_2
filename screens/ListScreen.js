import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';
import ListItem from '../components/ListItem';

const STORAGE_KEY = '@shopping_list';

export default function ListScreen() {
  // state til at gemme listen af varer
  const [items, setItems] = useState([]);
  // state til at holde indtastet tekst
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  // Indlæs data fra storage når komponenten indlæses første gang
  useEffect(() => {
    loadItems();
  }, []);

  // Gem varer i storage når items ændres
  useEffect(() => {
    if (!loading) {
      saveItems();
    }
  }, [items, loading]);

  // Indlæs varer fra AsyncStorage
  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Fejl ved indlæsning af varer:', error);
      Alert.alert('Fejl', 'Kunne ikke indlæse listen');
    } finally {
      setLoading(false);
    }
  };

  // Gem varer i AsyncStorage
  const saveItems = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Fejl ved gemning af varer:', error);
      Alert.alert('Fejl', 'Kunne ikke gemme listen');
    }
  };

  // Funktion til at tilføje en vare til listen
  const addItem = () => {
    if (text.length > 0) {
      setItems([...items, { id: Date.now().toString(), name: text }]);
      setText(''); // ryd inputfeltet igen
    }
  };

  // Funktion til at fjerne en vare fra listen
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Min Indkøbsliste</Text>
      
      {/* Inputfelt til ny vare */}
      <TextInput
        style={styles.input}
        placeholder="Tilføj en vare..."
        value={text}
        onChangeText={setText}
      />

      {/* Knap til at tilføje en vare */}
      <View style={styles.buttonContainer}>
        <Button title="➕ Tilføj" color="#27ae60" onPress={addItem} />
      </View>

      {/* Viser listen med varer */}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} onDelete={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
