import React from 'react';
import Chargement from './Chargement';
import Liste from './Liste';
import { listStore } from '../stores/stores';
import {
  loadNomenclature,
} from '../actions/actions';

function filterByCode(rawData, code) {
  const codeObject = rawData.find(element => element.code.value === code);
  const children = codeObject.children.value.split(';');
  return rawData.filter(i => children.indexOf(i.uri.value) > -1);
}

/**
 * Ce composant gère l'affichage d'une nomenclature.
 * C'est un composant à état, celui-ci étant géré dans le store ad hoc.
 */
export default class Nomenclature extends React.Component {

  componentWillMount() {
    listStore.subscribe(() => {
      this.setState({
        rawData: listStore.getState().rawData,
        items: listStore.getState().items,
      });
    });
    this.getData();
  }

  getData() {
    listStore.dispatch(loadNomenclature(this.props.params.nom));
  }

  getContextualComponent() {
    let items = null;
    if (this.state.rawData === undefined) {
      return <Chargement />;
    }
    if (this.props.params.code) {
      items = filterByCode(this.state.rawData, this.props.params.code);
    } else {
      items = this.state.items;
    }
    return <Liste titre={this.props.params.nom} contenu={items} />;
  }

  render() {
    return (
      <div>
        {this.getContextualComponent()}
      </div>
    );
  }
}

Nomenclature.propTypes = {
  params: React.PropTypes.object,
};
