import { range } from './utils';

import React from 'react';
import ReactDOM from 'react-dom';

console.log(`Chargement de l'application [${new Date().toTimeString()}]`);
console.log('Test de la fonction range(10) >> ', range(10));


// TODO React app entry point.
class App extends React.Component {

  render() {
    return (
        <h1>{this.props.titre}</h1>
    );
  }
}

App.propTypes = { titre: React.PropTypes.string };

ReactDOM.render(<App titre="l e i f" />, document.getElementById('app'));
