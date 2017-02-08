import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore, {loadFromStore} from './store/configureStore';
import Root from './containers/Root';
import * as Actions from './actions/index';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Preload contacts
loadFromStore(store).then((state)=>{
    if(state.contacts) {
        state.contacts.map((c)=>{
            store.dispatch(Actions.preloadContact(c));
        });
    }
});

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
