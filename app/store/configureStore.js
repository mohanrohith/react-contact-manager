import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import debounce from 'redux-storage-decorator-debounce';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import * as Actions from '../actions/types';

let engine = createEngine('contactManager');
engine = debounce(engine, 1500);
const loadStore = storage.createLoader(engine);
const storageMiddleware = storage.createMiddleware(engine, [], [
    Actions.CONTACTS_ADD,
    Actions.CONTACTS_DELETE,
    Actions.CONTACTS_EDIT
]);

const middlewares = [storageMiddleware];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
}

export function loadFromStore(store) {
    return loadStore(store);
}
