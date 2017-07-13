import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

// Middleware
import ReduxThunk from 'redux-thunk';

// Reducers
// import reducers from './reducers/';

// Import the BooksList Component
import BooksList from './src/components/BooksList';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


export default class App extends Component {
  render() {
    return (
	    <BooksList />
    );
  }
}