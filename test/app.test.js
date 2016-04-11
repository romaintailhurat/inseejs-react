'use strict';
let assert = require('assert');
let listStore = require('../src/js/stores/stores.js').listStore;
let RECEIVE_NAF = require('../src/js/actions/actions.js').RECEIVE_NAF;

const DUMMY_NAF_DATA = { key: "value" };

describe('Store', function() {
  it('doit ne rien faire si l\'action n\'est pas connue', function() {
    let stateBefore = listStore.getState();
    listStore.dispatch({ type: 'NOTHING', data: null });
    let stateAfter = listStore.getState();
    assert.equal(stateBefore, stateAfter);
  });

  it('doit modifier l\'état', function() {
    listStore.dispatch({ type: RECEIVE_NAF, data: DUMMY_NAF_DATA});
    let stateAfter = listStore.getState();
    assert.equal(stateAfter.naf, DUMMY_NAF_DATA);
  });
});
