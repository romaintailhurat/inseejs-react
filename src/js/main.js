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
import NomenclatureView from './components/NomenclatureView';
import Concept from './components/Concept';

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
      <Route path="/nomenclature" component={NomenclatureView}>
        <Route path=":nom(/:code)" component={Nomenclature} />
      </Route>
      {/* <Route path="/nomenclature/:nom(/:code)" component={Nomenclature} /> */}
      <Route path="/concept" component={Concept} />
      <Route path="/credits" component={Credits} />
    </Route>
  </Router>,
  document.getElementById('app')
);
