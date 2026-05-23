import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import destinations from '../data/destinations';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.location.toLowerCase().includes(query.toLowerCase()));
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🔍 Search</Text>
      <TextInput style={styles.input} placeholder="Cari destinasi..." value={query} onChangeText={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail', { destination: item })}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tidak ada hasil.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginBottom: 12 },
  input: { backgroundColor: '#fff', borderRadius: 12, padding: 12, fontSize: 15, borderWidth: 1, borderColor: '#dfe6e9', marginBottom: 16 },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 10, elevation: 2 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#2d3436' },
  itemLocation: { fontSize: 13, color: '#636e72', marginTop: 4 },
  empty: { textAlign: 'center', color: '#b2bec3', marginTop: 40 },
});