import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

//actions
import { getBookDetails } from '../actions/';

//components
import BooksData from './BooksData';

export default class BooksList extends Component {

	constructor(props) {
		super(props);
		this.state = {
      showBook: false,
      bookData: '',
		}
		this.getBookData = this.getBookData.bind(this);
	}

	getBookData() {
    this.setState({
      showBook: !this.state.showBook
    });
		getBookDetails().then( resp => {
      this.setState({
        bookData: resp.text
      });
    });
	}

  render() {
    return (
      <View style={styles.container}>
      	<Button
      	  onPress={this.getBookData}
      	  title="Awesome Book"
      	  color="#841584"
      	/>
        {
          this.state.showBook ?
            <BooksData bookData={this.state.bookData}/>
          : <Text></Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaf'
  },
});
