import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);