import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './src/App';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
