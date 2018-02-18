import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import Post from 'components/Post';
import Header from 'components/Header';

export default class App extends Component {

  state = {
    nameApp: 'GoNative App - First',
    posts: [
      {
        id: 0,
        title: 'Lets goNative',
        author: 'Jether Canhada',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
      {
        id: 1,
        title: 'Estudar GraphQL',
        author: 'Lebron James',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
      {
        id: 2,
        title: 'Estudar GoLang',
        author: 'Kobe Brayant',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
      },
    ],
  }

  render() {
    return (
    <View style={ styles.main }>
      <Header title={ this.state.nameApp } />
      <View style={ styles.viewCenter }>
        <ScrollView styles={ styles.contentContainer }>
          { this.state.posts.map(post => (
            <Post key={ post.id }
                  title={ post.title }
                  author={ post.author }
                  description={ post.description } />
          )) }
        </ScrollView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EE7777',
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
  },
  instructions: {
    fontSize: 22,
    color: 'blue',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});
