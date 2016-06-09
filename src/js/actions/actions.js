import {
  nafQuery,
  sectionQuery,
  childrenQuery,
} from '../queries';

import {
  executeSparql,
  executeSparqlAndDispatch,
} from '../http';

// ----- CONSTANTES

export const LOAD_NAF = 'LOAD_NAF';
export const LOAD_SECTION = 'LOAD_SECTION';

export const RECEIVE_NAF = 'RECEIVE_NAF';
export const RECEIVE_SECTION = 'RECEIVE_SECTION';

// ----- ACTIONS

export function receiveNAF(data) {
  return { type: RECEIVE_NAF, data };
}

export function receiveSection(data) {
  return { type: RECEIVE_SECTION, data };
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

/** Liste des nomenclatures et des fonctions de chargement associées. */
// TODO Mettre en oeuvre une requête SPARQL générique à la place
export const NOMENCLATURES = {
  naf: loadNAF,
  pcs2003: loadNAF,
  cj: loadNAF,
};

/** Action générique de chargement */
export function loadNomenclature(nom) {
  const noms = Object.keys(NOMENCLATURES);
  if (noms.indexOf(nom) < 0) {
    throw Error('Cette nomenclature n\'est pas supportée.');
  }
  return NOMENCLATURES[nom]();
}
