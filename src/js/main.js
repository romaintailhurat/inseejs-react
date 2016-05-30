import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Credits from './components/Credits';

require('file?name=[name].[ext]!../../index.html');

console.log(`Chargement de l'application [${new Date().toTimeString()}]`);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/credits" component={Credits} />
  </Router>,
  document.getElementById('app')
);
