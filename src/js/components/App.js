import React from 'react';
import Footer from './Footer';
import ListeNomenclatures from './ListeNomenclatures';
import Navigation from './Navigation';
import { NOMENCLATURES } from '../actions/actions';

/** Composant d'affichage principal. */
const App = (props) =>
  <div id="main" className="container-fluid">
    <Navigation titre="Leif" />

    <div className="row">
      <div className="col-md-4">
        <ListeNomenclatures liste={Object.keys(NOMENCLATURES)} />
      </div>
      <div className="col-md-8">
        {/* Composant(s) fournit selon l'URL par le router */}
        {props.children}
      </div>
    </div>

    <Footer version={props.route.version} />
  </div>;

App.propTypes = {
  children: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default App;
