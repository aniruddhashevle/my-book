/* =============================================================================
   imports
============================================================================= */
/* node modules */
import axios from 'axios';

/* common functions */
import { timeout } from '../utils/rest-api';


/* =============================================================================
   actions
============================================================================= */
/**
 * call API to get book details
 *
 * @return Object
 */
export function getBookDetails() {
  return timeout(10000, axios.get('https://cap_america.inkitt.de/1/stories/106766/chapters/1'))
    .then(response => {
      /* success */
      if(response.status === 200) {
        return response.data.response;
      }
      return false;
    })
    .catch(err => {
      /* error */
      return err.response;
    });
}