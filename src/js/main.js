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

require('file?name=[name].[ext]!../../index.html');

console.log( // eslint-disable-line no-console
  `Chargement de l'application [${new Date().toTimeString()}]`);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/nomenclature/:nom" component={Nomenclature} />
      <Route path="/credits" component={Credits} />
    </Route>
  </Router>,
  document.getElementById('app')
);
