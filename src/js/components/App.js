import React from 'react';
import Welcome from './Welcome';
import Liste from './Liste';
import Chargement from './Chargement';
import Footer from './Footer';
import { listStore } from '../stores/stores';
import { loadNAF } from '../actions/actions';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

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
    return <Liste titre="Naf" contenu={this.state.data} />;
  }

  render() {
    return (
      <div id="main">
        <Welcome titre="l e i f" soustitre="Navigateur de nomenclatures" />
        {this.getContextualComponent()}
        <Footer />
      </div>
    );
  }
}
