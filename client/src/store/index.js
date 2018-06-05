import {createStore,
        applyMiddleware,
        compose} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const history = createHistory();
const middleware = [routerMiddleware(history),thunk];
const initialState = {
  city:'buenos aires,ar',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware,thunk)));
