import { listStore } from '../stores/stores';
export const LOAD_NAF = 'LOAD_NAF';
export const RECEIVE_NAF = 'RECEIVE_NAF';

export function receiveNAF(data) {
  return { type: RECEIVE_NAF, data };
}

export function loadNAF() {
  fetch('http://www.reddit.com/r/askreddit.json')
      .then(response => response.json())
      .then(json => listStore.dispatch(receiveNAF(json)));
  return { type: LOAD_NAF };
}
