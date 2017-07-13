// Import types
import {
  UPDATE_CUSTOMER_DETAILS,
  RESET_CUSTOMER_DETAILS,
} from 'src/actions/action_types';

/* customer information - initial object */
const INITIAL_STATE = {
  '_id': '',
  'cart': {},
};

/* function to set cosutomer initial data */
function setInitialData(action, state) {
  const { data } = action;

  let keys = [];

  /**
   * check requested object key is present in customerInformation state
   * create array of key
   * {
   *   key1: val1,
   *   key2: val2
   * }
   * keys = [key1, key2]
   */
  for(var k in data) {
    if(state.hasOwnProperty(k)) {
      keys.push(k);
    }
  }

  /**
   * Loop through keys array and update corresponding state key value
   * {
   *   key1: value1,
   *   key2: value2,
   * }
   */
  keys.forEach((e, i) => {
    state = Object.assign({}, state, {
      ...state,
      [e]: data[e]
    });
  });

  return state;
}

/* common switch for actions */
function commonSwitch(action, state) {
  switch (action.type) {
    case UPDATE_CUSTOMER_DETAILS:
      return setInitialData(action, state);

    case RESET_CUSTOMER_DETAILS:
      return setInitialData({
        ...action,
        data: INITIAL_STATE
      }, state);

    default:
      return state;
  }
}

/* function which manage the state of customer  */
export function customerInformation(state = INITIAL_STATE, action) {
  return commonSwitch(action, state);
}