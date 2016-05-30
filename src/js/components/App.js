import React from 'react';

import Welcome from './Welcome';
import Chargement from './Chargement';
import Footer from './Footer';
import ListeNomenclatures from './ListeNomenclatures';
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
    return <ListeNomenclatures liste={['NAF', '<votre-nomenclature-ici>']} />;
  }

  render() {
    return (
      <div id="main">
        <Welcome titre="l e i f" soustitre="Navigateur de nomenclatures" />
        <ListeNomenclatures liste={['NAF', '<votre-nomenclature-ici>']} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
