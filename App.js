/* =============================================================================
   imports
============================================================================= */
/* node modules */
import React, { Component } from 'react';

/* components */
import BooksList from './src/components/BooksList';


/* =============================================================================
   App component
============================================================================= */
export default class App extends Component {

	/**
	 * render DOM
	 *
	 * @return Object
	 */
  render() {
    return (
	  	<BooksList />
    );
  }

}