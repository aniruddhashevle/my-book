/* =============================================================================
   imports
============================================================================= */
/* node modules */
import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

/* actions */
import { getBookDetails } from '../actions/';

/* components */
import BooksData from './BooksData';


/* =============================================================================
   BookList component
============================================================================= */
export default class BooksList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBook: false,
      bookData: ''
    }
    this.getBookData = this.getBookData.bind(this);
  }

  /**
   * call action and get the book data and set states
   *
   * @return void
   */
  getBookData() {
    this.setState({ showBook: !this.state.showBook });
    getBookDetails().then(resp => {
        console.log("resp", resp);
      if(resp && !resp.status) {
        this.setState({ bookData: resp });        
      }
      else {
        Alert.alert(
          'Warning!',
          'Something went wrong. Please check you internet connection!!!',
          [
            {text: 'OK'},
          ]
        )
      }
    })
  }

  /**
   * render DOM
   *
   * @return Object
   */
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.getBookData}
          style={styles.defaultButton}
         >
          <Text style={styles.defaultButtonText}>
            AWESOME BOOK
          </Text>
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


/* =============================================================================
   Styles for BookList component
============================================================================= */
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c496ef'
  },
  defaultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#872d88',
    borderColor: '#872d88',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 25,
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
