import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Credits from './components/Credits';
import Nomenclature from './components/Nomenclature';
import TestComponent from './components/TestComponent';

require('file?name=[name].[ext]!../../index.html');

console.log(`Chargement de l'application [${new Date().toTimeString()}]`);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/nomenclature/:nom" component={Nomenclature} />
      <Route path="/credits" component={Credits} />
      <Route path="/test" component={TestComponent} />
    </Route>
  </Router>,
  document.getElementById('app')
);
