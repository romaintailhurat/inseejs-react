import { LOAD_NAF } from '../actions/actions';
import { createStore } from 'redux';

export function storeList(state = {}, action) {
  switch (action.type) {
    case LOAD_NAF:
      return Object.assign({}, state, {
        naf: ['niveau-1', 'niveau-2', 'niveau-3'],
      });
    default:
      return state;
  }
}

export const listStore = createStore(storeList);
