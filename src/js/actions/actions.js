import { listStore } from '../stores/stores';
import { nafQuery, createQuery } from '../queries';

export const LOAD_NAF = 'LOAD_NAF';
export const RECEIVE_NAF = 'RECEIVE_NAF';

export function receiveNAF(data) {
  return { type: RECEIVE_NAF, data };
}

export function loadNAF() {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  fetch(createQuery(nafQuery), { headers })
      .then(response => response.json())
      .then(json => listStore.dispatch(receiveNAF(json.results.bindings)));
  return { type: LOAD_NAF };
}
