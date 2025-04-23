import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen({ darkMode, setDarkMode }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [localDarkMode, setLocalDarkMode] = useState(darkMode);

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setLocalDarkMode((prev) => {
      const newVal = !prev;
      setDarkMode(newVal);
      return newVal;
    });
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const styles = getStyles(localDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paramètres ⚙️</Text>

      <View style={styles.option}>
        <Text style={styles.label}>Notifications météo</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Mode sombre</Text>
        <Switch value={localDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}

function getStyles(darkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'flex-start',
      backgroundColor: darkMode ? '#121212' : '#fff',
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      color: darkMode ? '#fff' : '#000',
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      color: darkMode ? '#fff' : '#000',
    },
  });
}
