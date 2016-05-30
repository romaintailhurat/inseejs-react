import { listStore } from './stores/stores';
import { createQuery } from './queries';

/**
* Exécute une requête SPARQL via HTTP, puis exécute une fonction sur les données
* retournées par la réponse.
* @param {string} query, la requête
* @param {string} event, l'évènement produit
* @param {function} callback, la fonction à exécuter en cas de succès
*/
export function executeSparql(query, callback) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  fetch(createQuery(query), { headers })
      .then(response => response.json())
      .then(json => callback(json.results.bindings));
}

/**
 * Exécute une requête SPARQL via HTTP, puis envoie une action.
 */
export function executeSparqlAndDispatch(query, event, action) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  fetch(createQuery(query), { headers })
      .then(response => response.json())
      .then(json => listStore.dispatch(action(json.results.bindings)));
  return { type: event };
}
