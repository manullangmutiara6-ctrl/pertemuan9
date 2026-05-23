import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function DetailScreen({ route }) {
  const { destination } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: destination.image }} style={styles.heroImage} />
        <View style={styles.content}>
          <Text style={styles.name}>{destination.name}</Text>
          <Text style={styles.location}>📍 {destination.location}</Text>
          <Text style={styles.price}>{destination.price}</Text>
          <Text style={styles.descLabel}>Tentang Destinasi</Text>
          <Text style={styles.description}>{destination.description}</Text>
          <TouchableOpacity style={[styles.favBtn, isFavorite && styles.favBtnActive]} onPress={() => setIsFavorite(!isFavorite)}>
            <Text style={styles.favBtnText}>{isFavorite ? '❤️ Ditambahkan ke Favorit' : '🤍 Tambah ke Favorit'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  heroImage: { width: '100%', height: 280 },
  content: { padding: 20 },
  name: { fontSize: 26, fontWeight: 'bold', color: '#2d3436' },
  location: { fontSize: 14, color: '#636e72', marginTop: 6 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#00b894', marginTop: 8 },
  descLabel: { fontSize: 16, fontWeight: 'bold', color: '#2d3436', marginTop: 20, marginBottom: 8 },
  description: { fontSize: 14, color: '#636e72', lineHeight: 22 },
  favBtn: { marginTop: 24, backgroundColor: '#dfe6e9', padding: 16, borderRadius: 12, alignItems: 'center' },
  favBtnActive: { backgroundColor: '#fd79a8' },
  favBtnText: { fontWeight: 'bold', fontSize: 15, color: '#2d3436' },
});