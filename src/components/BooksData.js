import React, { Component } from 'react';
import { 
	StyleSheet,
	Text,
	View,
	ScrollView 
} from 'react-native';
import HtmlText  from 'react-native-html-to-text';

export default class BooksData extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.bookData.name}</Text>
          <HtmlText style={styles.bookData} html={this.props.bookData.text}></HtmlText>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#deace2'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  bookData: { fontSize: 16 }
});
