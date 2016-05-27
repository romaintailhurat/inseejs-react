import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

require('file?name=[name].[ext]!../../index.html');

console.log(`Chargement de l'application [${new Date().toTimeString()}]`);

ReactDOM.render(<App />, document.getElementById('app'));
