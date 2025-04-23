import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>MétéMattéo 🌤️</Text>
        <Text style={styles.subtitle}>Application météo développée par Mattéo FAYE.</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fonctionnalités</Text>
          <Text style={styles.bullet}>• Météo actuelle selon votre position</Text>
          <Text style={styles.bullet}>• Carte de prévision de pluie</Text>
          <Text style={styles.bullet}>• Météo à 5 jours par ville</Text>
        </View>

        <Text style={styles.footer}>Version 1.0.0 — © 2025 Mattéo Faye</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#f7f9fc',
  },
  container: {
    flex: 1,
    padding: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  section: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  bullet: {
    fontSize: 15,
    marginBottom: 6,
    color: '#444',
  },
  footer: {
    fontSize: 13,
    color: '#aaa',
  },
});
