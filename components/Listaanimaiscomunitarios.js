import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { getNews } from '../components/Fetchcomunitarios';
import Article from '../components/Comunitarios';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View style={styles.View}>
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.Imagem}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  View: {
    backgroundColor: '#F2F3F4',
  },
});