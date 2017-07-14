import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, ActivityIndicator, TouchableOpacity } from 'react-native';

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
      isFetching: false,
		}
		this.getBookData = this.getBookData.bind(this);
	}

	getBookData() {
    this.setState({
      showBook: !this.state.showBook,
    });
    if(!this.state.showBook) {
      this.setState({
        isFetching: true
      });
    }
		getBookDetails().then( resp => {
      this.setState({
        bookData: resp.text,
        isFetching: false
      });
    });
	}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.getBookData}
          style={[
            styles.defaultButton,
          ]}
         >
          <Text style={[styles.defaultButtonText]}>
            AWESOME BOOK
          </Text>
          {
            this.state.isFetching ?          
              <ActivityIndicator
                animating={this.state.isFetching} 
                style={styles.verticallyCentering}
                size="small"
              />
            : <Text></Text>
          }
        </TouchableOpacity>
        {
          this.state.showBook && this.state.bookData ?
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
  verticallyCentering: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
    zIndex: 5,
    opacity: 0.8,
    backgroundColor: 'transparent'
  },
  defaultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#872d88',
    borderColor: '#872d88',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    height: 45,
    justifyContent: 'center',
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 1
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold"
  }
});
