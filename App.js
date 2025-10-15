import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importerer de 5 skærme fra screens-mappen
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import MapScreen from './screens/MapScreen';
import StoreListScreen from './screens/StoreListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    // NavigationContainer styrer navigationen i hele appen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* De forskellige "routes" til vores skærme */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="StoreList" component={StoreListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
