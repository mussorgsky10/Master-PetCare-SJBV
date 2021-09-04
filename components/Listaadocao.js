import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export default function Adocao () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.luizinholopes.xyz/ADOCAO.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={({ Contato }, index) => Contato}
          renderItem={({ item }) => (
        <View style={styles.Card}>
        <View>
          <Text style={styles.Text}>{item.Nome} </Text>
        </View>        
        <View>
        <Image source={{ uri: item.Imagem }} style={styles.ImageStyle}/>
        </View>
        <View>
        <Text style={styles.Textdescription}>Espécie: {item.Especie} | Sexo: {item.Sexo}</Text>
        </View>        
        <View>
          <Text style={styles.Textdescription}>História: {item.Historia} </Text>
        </View>
        <View>
          <Text style={styles.Textdescription}>Fone: {item.Contato} | Data: {item.Data} </Text>
        </View>        
      </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  Card: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: width / 1.1,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  Textdescription: {
    fontSize: 16,
    margin: 10,
  },
  ImageStyle: {
    width: width / 1.1,
    height: 200,
  },
});