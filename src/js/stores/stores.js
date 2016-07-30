import {
  RECEIVE_NAF,
  RECEIVE_SECTION,
  BROWSE_CLASSIFICATION,
  RECEIVE_CONCEPTS,
} from '../actions/actions';
import { createStore } from 'redux';

/**
 * Renvoie les code enfants d'un code parent.
 * @param {object} rawData - les données brutes contenant la nomenclature
 * @param {string} code - le code parent
 * @return {object} un objet contenant les codes enfants
 */
// TODO Déplacer dans module de manipulation de données
function filterByCode(rawData, code) {
  const codeObject = rawData.find(element => element.code.value === code);
  const children = codeObject.children.value.split(';');
  return rawData.filter(i => children.indexOf(i.uri.value) > -1);
}

// TODO Déplacer dans module de manipulation de données
// TODO Filtrer grace à topConceptOf
function filterForRoot(rawData) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTU'.split('');
  return rawData.filter(o => letters.indexOf(o.code.value) > -1);
}

export function storeList(state = {}, action) {
  switch (action.type) {
    case RECEIVE_NAF:
      return Object.assign({}, state, {
        rawData: action.data,
        items: filterForRoot(action.data),
      });
    case RECEIVE_SECTION:
      return Object.assign({}, state, {
        items: action.data,
      });
    case BROWSE_CLASSIFICATION:
      return Object.assign({}, state, {
        items: filterByCode(state.rawData, action.code),
      });
    case RECEIVE_CONCEPTS:
      return Object.assign({}, state, {
        concepts: action.data,
      });
    default:
      return state;
  }
}

export const listStore = createStore(storeList);
