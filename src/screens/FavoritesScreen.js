import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>❤️ Favorites</Text>
      <Text style={styles.sub}>Tap "Tambah ke Favorit" di halaman detail untuk menyimpan destinasi!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', alignItems: 'center', justifyContent: 'center', padding: 24 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginBottom: 12 },
  sub: { fontSize: 14, color: '#636e72', textAlign: 'center', lineHeight: 22 },
});