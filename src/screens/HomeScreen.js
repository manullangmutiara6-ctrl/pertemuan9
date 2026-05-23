import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import destinations from '../data/destinations';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🌍 Destinations</Text>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { destination: item })}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardLocation}>📍 {item.location}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  header: { fontSize: 26, fontWeight: 'bold', padding: 20, color: '#2d3436' },
  list: { paddingHorizontal: 16, paddingBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 16, marginBottom: 16, overflow: 'hidden', elevation: 4 },
  cardImage: { width: '100%', height: 180 },
  cardInfo: { padding: 14 },
  cardName: { fontSize: 18, fontWeight: 'bold', color: '#2d3436' },
  cardLocation: { fontSize: 13, color: '#636e72', marginTop: 4 },
  cardPrice: { fontSize: 15, fontWeight: '600', color: '#00b894', marginTop: 6 },
});