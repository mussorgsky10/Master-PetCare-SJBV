import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('screen')

export default class Article extends React.Component {
  render() {
    const {
      Nome,
      Imagem,
      Historia,
    } = this.props.article;

    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <View style={styles.Card}>
        <View>
          <Image source={{ uri: Imagem || defaultImg }} style={styles.ImageStyle} />
        </View>
        <View>
          <Text style={styles.Text}>{Nome} </Text>
        </View>
        <View>
          <Text style={styles.Textdescription}>{Historia} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  View: {
    backgroundColor: '#F2F3F4',
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
  Textsource: {
    fontSize: 15,
    margin: 10,
  },
  ImageStyle: {
    width: width / 1.1,
    height: 200,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
  },
});