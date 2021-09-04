import React from 'react';
import { Text, View, Linking, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('screen')

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      source,
      urlToImage,
      url
    } = this.props.article;

    const defaultImg =
      'https://www.luizinholopes.xyz/imagens/default.jpg';

    return (
      <TouchableOpacity style={styles.Card} onPress={() => Linking.openURL (url)}>
        <View>
          <Image source={{ uri: urlToImage || defaultImg }} style={styles.ImageStyle} />
        </View>
        <View>
          <Text style={styles.Text}>{title} </Text>
        </View>
        <View>
          <Text style={styles.Textdescription}>{description} </Text>
        </View>
        <View>
          <Text style={styles.Textsource}>Fonte: {source.name} </Text>
        </View>
      </TouchableOpacity>
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
    borderRadius: 8,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
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
    alignSelf: 'center',    
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
  },
});