import axios from 'axios';

import { timeout } from '../utils/rest-api';

/* action to get the Book data */
export function getBookDetails() {
  // return dispatch => {

    // dispatch(requestBookData());

    return timeout(10000, axios.get('https://cap_america.inkitt.de/1/stories/106766/chapters/1'))
      .then(response => {

        if(response.status === 200) {
          /* set initial data */
          // dispatch(updateCustomerInfo(updatedCart));

          // dispatch(receiveBookData());
          return response.data.response;
        }
        return false;
      })
      .catch(err => {
        return err.response;
      });
    // };
}