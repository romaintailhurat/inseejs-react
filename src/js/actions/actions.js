import { listStore } from '../stores/stores';
import {
  nafQuery,
  sectionQuery,
  childrenQuery,
  createQuery,
} from '../queries';

export const LOAD_NAF = 'LOAD_NAF';
export const LOAD_SECTION = 'LOAD_SECTION';

export const RECEIVE_NAF = 'RECEIVE_NAF';
export const RECEIVE_SECTION = 'RECEIVE_SECTION';

export function receiveNAF(data) {
  return { type: RECEIVE_NAF, data };
}

export function receiveSection(data) {
  return { type: RECEIVE_SECTION, data };
}

/**
* Exécute une requête SPARQL via HTTP
* @param {string} query, la requête
* @param {string} event, l'évènement produit
* @param {function} callback, la fonction à exécuter en cas de succès
*/
function executeSparql(query, callback) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  fetch(createQuery(query), { headers })
      .then(response => response.json())
      .then(json => callback(json.results.bindings));
}

function executeSparqlAndDispatch(query, event, callback) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  fetch(createQuery(query), { headers })
      .then(response => response.json())
      .then(json => listStore.dispatch(callback(json.results.bindings)));
  return { type: event };
}

export function loadChildren(data) {
  return executeSparqlAndDispatch(childrenQuery(data[0].uri.value), LOAD_SECTION, receiveSection);
}

export function loadNAF() {
  return executeSparqlAndDispatch(nafQuery, LOAD_NAF, receiveNAF);
}

export function loadSection(code) {
  return executeSparql(sectionQuery(code), loadChildren);
}
