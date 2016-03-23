import { RECEIVE_NAF } from '../actions/actions';
import { createStore } from 'redux';

export function storeList(state = {}, action) {
  switch (action.type) {
    case RECEIVE_NAF:
      console.log("JSON", action.data);
      return Object.assign({}, state, {
        naf: action.data,
      });
    default:
      return state;
  }
}

export const listStore = createStore(storeList);
