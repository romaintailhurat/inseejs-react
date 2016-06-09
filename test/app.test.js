import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import Liste from '../src/js/components/Liste.js';

const SIMPLE_TEST_DATA = [{
    code: {
      value: "CODE"
    },
    label: {
      value: "LABEL"
    }
  }
];

describe('Composant liste', function() {
  it('Le titre est bien valorisé', function() {
    const titre = "Toto";
    const liste = shallow(<Liste titre={titre} contenu={SIMPLE_TEST_DATA} />);
    assert.equal(liste.find('.titre').text(), titre.toUpperCase());
  });
});
