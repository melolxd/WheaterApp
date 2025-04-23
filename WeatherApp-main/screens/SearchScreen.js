import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ForecastWeather from '../component/ForecastWeather';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const API_KEY = 'd6def4924ad5f9a9b59f3ae895b234cb';

export default function SearchScreen( {darkMode} ) {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const styles = getStyles(darkMode);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadRecentSearches();
    }, [])
  );  

  const loadRecentSearches = async () => {
    try {
      const stored = await AsyncStorage.getItem('recentCities');
      if (stored) {
        setRecentSearches(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Erreur chargement recherches:', e);
    }
  };

  const saveSearch = async (newCity) => {
    try {
      const updated = [newCity, ...recentSearches.filter(c => c !== newCity)].slice(0, 5);
      setRecentSearches(updated);
      await AsyncStorage.setItem('recentCities', JSON.stringify(updated));
    } catch (e) {
      console.error('Erreur sauvegarde recherche:', e);
    }
  };

  const fetchCityForecast = async (cityName) => {
    if (!cityName) return;
    try {
      const geoRes = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
      if (geoRes.data.length > 0) {
        const { lat, lon } = geoRes.data[0];
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`);
        setForecastData(weatherRes.data);
        saveSearch(cityName);
        setCity(cityName);
      }
    } catch (e) {
      console.error('Erreur recherche météo:', e);
    }
  };

  const searchCityWeather = () => fetchCityForecast(city);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Ville :</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="Entrez une ville" />
      <Button title="Rechercher" onPress={searchCityWeather} />

      <Text style={styles.subTitle}>Dernières recherches :</Text>
      {recentSearches.map((item, idx) => (
        <TouchableOpacity key={idx} onPress={() => {
            setCity(item);
            fetchCityForecast(item);
          }}>
          <Text style={styles.recent}>{item}</Text>
        </TouchableOpacity>
      ))}

      {forecastData && (
        <View style={styles.forecastContainer}>
          <ForecastWeather data={forecastData} />
        </View>
      )}
    </ScrollView>
  );
}

function getStyles(darkMode) {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: darkMode ? '#121212' : '#fff',
      flexGrow: 1,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      color: darkMode ? '#fff' : '#000',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 10,
      color: darkMode ? '#fff' : '#000',
      backgroundColor: darkMode ? '#333' : '#fff',
    },
    subTitle: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 16,
      color: darkMode ? '#fff' : '#000',
    },
    recent: {
      paddingVertical: 5,
      color: darkMode ? '#80bfff' : '#007AFF',
    },
    forecastContainer: {
      marginTop: 20,
    },
  });
}

