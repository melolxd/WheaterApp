import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RainScreen from '../screens/RainScreen';
import SearchScreen from '../screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ darkMode }) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Accueil') iconName = 'home';
            else if (route.name === 'Pluie') iconName = 'rainy';
            else if (route.name === 'Recherche') iconName = 'search';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Accueil">{() => <HomeScreen darkMode={darkMode} />}</Tab.Screen>
        <Tab.Screen name="Pluie">{() => <RainScreen darkMode={darkMode} />}</Tab.Screen>
        <Tab.Screen name="Recherche">{() => <SearchScreen darkMode={darkMode} />}</Tab.Screen>
      </Tab.Navigator>
    );
  }