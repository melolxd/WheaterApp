import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ darkMode, setDarkMode }) {
  return (
    <Drawer.Navigator initialRouteName="Météo (Onglets)">
      <Drawer.Screen name="Météo (Onglets)">
        {() => <BottomTabs darkMode={darkMode} />}
        </Drawer.Screen>
        <Drawer.Screen name="À propos">
        {() => <AboutScreen darkMode={darkMode} />}
        </Drawer.Screen>
        <Drawer.Screen name="Paramètres">
        {() => <SettingsScreen darkMode={darkMode} setDarkMode={setDarkMode} />}
        </Drawer.Screen>
    </Drawer.Navigator>
  );
}
