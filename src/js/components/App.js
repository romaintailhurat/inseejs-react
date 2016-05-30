import React from 'react';
import Welcome from './Welcome';
import Footer from './Footer';
import ListeNomenclatures from './ListeNomenclatures';

/** Composant d'affichage principal. */
const App = (props) =>
  <div id="main">
    <Welcome titre="l e i f" soustitre="Navigateur de nomenclatures" />
    <ListeNomenclatures liste={['NAF', '<votre-nomenclature-ici>']} />
    { /* Composant(s) fournit selon l'URL par le router */ }
    {props.children}
    <Footer />
  </div>;

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
