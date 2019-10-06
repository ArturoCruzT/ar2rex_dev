//|------LibrerĂ­as------|//
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//|------Css-------|//
import '../src/Styles/animate.css';
import '../src/Styles/gelita.css';
import '../src/Styles/animate.css';
import '../src/Styles/mdb.css';
import '../src/Styles/modal-sidebar.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
