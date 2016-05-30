import React from 'react';
import Chargement from './Chargement';
import Liste from './Liste';
import { listStore } from '../stores/stores';
import { loadNAF } from '../actions/actions';

export default class Nomenclature extends React.Component {

  componentWillMount() {
    listStore.subscribe(() => {
      this.setState({
        data: listStore.getState().naf,
      });
    });
    this.getData();
  }

  getData() {
    listStore.dispatch(loadNAF());
  }

  getContextualComponent() {
    if (this.state.data === undefined) {
      return <Chargement />;
    }
    return <Liste titre={this.props.params.nom} contenu={this.state.data} />;
  }

  render() {
    return (
      <div>
        <p>Nomenclature : {this.props.params.nom}</p>
        {this.getContextualComponent()}
      </div>
    );
  }
}

Nomenclature.propTypes = {
  params: React.PropTypes.object,
};
