import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';
import App from './components/App';
import Credits from './components/Credits';
import Nomenclature from './components/Nomenclature';

// Liste de fichiers / dossiers à ajouter au build Webpack
require('file?name=[name].[ext]!../../index.html');
const version = require('json!../../version.json').version;

console.log( // eslint-disable-line no-console
  `Chargement de l'application [${new Date().toTimeString()}]`);
console.log( // eslint-disable-line no-console
  `https://github.com/romaintailhurat/inseejs-react/commit/${version}`);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" version={version} component={App}>
      <Route path="/nomenclature/:nom" component={Nomenclature} />
      <Route path="/credits" component={Credits} />
    </Route>
  </Router>,
  document.getElementById('app')
);
