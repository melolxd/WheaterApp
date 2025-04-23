import React, { useState } from 'react';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavDarkTheme, DefaultTheme as NavDefaultTheme } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paperTheme = darkMode ? PaperDarkTheme : PaperDefaultTheme;
  const navTheme = darkMode ? NavDarkTheme : NavDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <DrawerNavigator darkMode={darkMode} setDarkMode={setDarkMode} />
      </NavigationContainer>
    </PaperProvider>
  );
}
