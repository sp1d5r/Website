import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './components/single_page_elements/Home';
import App from './App';
import Header from './components/single_page_elements/Header'
import * as serviceWorker from './serviceWorker';

// Main Index File,
//

ReactDOM.render(
    <App />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
