/* =============================================================================
   imports
============================================================================= */
/* node modules */
import React, { Component } from 'react';
import { 
	StyleSheet,
	Text,
	View,
	ScrollView 
} from 'react-native';
import HtmlText  from 'react-native-html-to-text';


/* =============================================================================
   BookData component
============================================================================= */
export default class BooksData extends Component {

  /**
   * render DOM
   *
   * @return Object
   */
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


/* =============================================================================
   Styles for BookData component
============================================================================= */
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#e3bee6'
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
