import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ImageComponent } from 'react-native';

const { width } = Dimensions.get('screen')

export default class Article extends React.Component {
  render() {
    const {
      Titulo,
      Imagem,
      Nome,
      Raça,
      Descricao,
      Motivacao,
      Contato,
    } = this.props.article;

    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <View style={styles.Card}>
        <View>
          <Text style={styles.Titulo}>{Titulo} </Text>
        </View>        
        <View>
          <Image source={{ uri: Imagem || defaultImg }} style={styles.ImageStyle} />
        </View>
        <View>
        <Text style={styles.Text}>Nome: {Nome} | Raça: {Raça}</Text>
        </View>        
        <View>
          <Text style={styles.Textdescription}>Relato: {Descricao} </Text>
        </View>
        <View>
          <Text style={styles.Motivo}>{Motivacao} </Text>
        </View>        
        <View>
          <Text style={styles.Contato}>Contato: {Contato}  </Text>
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({

  View: {
    backgroundColor: '#F2F3F4',
  },
  Titulo: {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,

  },
  Motivo: {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5,
  },
  Contato: {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 5,
  },
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
    elevation: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    //marginLeft: 10,
    margin: 10,
  },
  Textdescription: {
    fontSize: 17,
    margin: 10,
  },
  ImageStyle: {
    width: width / 1.1,
    height: 300,
    marginTop: 5,
    //marginLeft: 6,
    //borderTopLeftRadius: 8,
    //borderTopRightRadius: 8,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
  },
});