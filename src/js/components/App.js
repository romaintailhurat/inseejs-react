import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

/** Composant d'affichage principal. */
const App = (props) =>
  <div id="main" className="container-fluid">
    <Navigation titre="Leif" />

    <div className="row">
        {/* Composant(s) fournit selon l'URL par le router */}
        {props.children}
    </div>

    <Footer version={props.route.version} />
  </div>;

App.propTypes = {
  children: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default App;
