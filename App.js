import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function buscarAnimes() {
     
      const resposta = await fetch('https://api.jikan.moe/v4/top/anime?limit=15');
      const dados = await resposta.json();
      setAnimes(dados.data); 
    }
    buscarAnimes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Animes:</Text>
      
      <FlatList
        data={animes}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.images.jpg.image_url }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.titulo}>Título: {item.title}</Text>
              <Text style={styles.nota}>Nota: ⭐ {item.score}</Text>
              <Text style={styles.sinopse} numberOfLines={3}>Sinopse: {item.synopsis}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7494df',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  imagem: {
    width: 80,
    height: 120,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nota: {
    fontSize: 14,
    color: 'green',
    marginVertical: 5,
  },
  sinopse: {
    fontSize: 12,
    color: '#666',
  },
});