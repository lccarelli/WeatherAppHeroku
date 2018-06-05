import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';
import {store} from './store';

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
