import React from 'react';
import Chargement from './Chargement';
import Liste from './Liste';
import { listStore } from '../stores/stores';
import { loadNomenclature } from '../actions/actions';

/**
 * Ce composant gère l'affichage d'une nomenclature.
 * C'est un composant à état, celui-ci étant géré dans le store ad hoc.
 */
export default class Nomenclature extends React.Component {

  componentWillMount() {
    listStore.subscribe(() => {
      this.setState({
        data: listStore.getState().items,
      });
    });
    this.getData();
  }

  getData() {
    listStore.dispatch(loadNomenclature(this.props.params.nom));
  }

  getContextualComponent() {
    if (this.state.data === undefined) {
      return <Chargement />;
    }
    return <Liste titre={this.props.params.nom} contenu={this.state.data} />;
  }

  render() {
    console.log('params', this.props.params);
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
