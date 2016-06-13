'use strict';
let assert = require('assert');
import is from 'is_js';
let listStore = require('../src/js/stores/stores.js').listStore;
let RECEIVE_NAF = require('../src/js/actions/actions.js').RECEIVE_NAF;
let BROWSE_CLASSIFICATION = require('../src/js/actions/actions.js').BROWSE_CLASSIFICATION;

const DUMMY_NAF_DATA = { key: "value" };
// Données telles que renvoyées par le serveur
const NAF_JSON_PAYLOAD = require('./naf.test.json');
const SECTION_A_CHILDREN = require('./sectionA-children.test.json');

/* Tests sur l'API Redux */
describe('Le store de haut niveau', function() {

  it('doit ne rien faire si l\'action n\'est pas connue', function() {
    let stateBefore = listStore.getState();
    listStore.dispatch({ type: 'NOTHING', data: null });
    let stateAfter = listStore.getState();
    assert.equal(stateBefore, stateAfter);
  }); 

  it('doit filtrer selon le niveau', function() {
    listStore.dispatch({
      type: RECEIVE_NAF,
      data: NAF_JSON_PAYLOAD.results.bindings,
    })
    listStore.dispatch({
      type: BROWSE_CLASSIFICATION,
      code: 'A' });
    let state = listStore.getState();
    assert.equal(SECTION_A_CHILDREN.length, state.items.length);
  });

});
