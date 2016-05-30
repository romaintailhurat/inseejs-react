import { RECEIVE_NAF, RECEIVE_SECTION } from '../actions/actions';
import { createStore } from 'redux';

export function storeList(state = {}, action) {
  switch (action.type) {
    case RECEIVE_NAF:
      return Object.assign({}, state, {
        items: action.data,
      });
    case RECEIVE_SECTION:
      return Object.assign({}, state, {
        items: action.data,
      });
    default:
      return state;
  }
}

export const listStore = createStore(storeList);
