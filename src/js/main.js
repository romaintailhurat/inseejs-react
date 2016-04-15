import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

console.log(`Chargement de l'application [${new Date().toTimeString()}]`);

ReactDOM.render(<App />, document.getElementById('app'));
