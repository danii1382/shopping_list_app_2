import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function ListItem({ item, onDelete }) {
  return (
    // Et simpelt "kort" til hver vare i listen
    <View style={styles.listItem}>
      <View style={styles.listItemContent}>
        <Text style={styles.listItemText}>{item.name}</Text>
        <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}
          >
            <Text style={styles.deleteButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}