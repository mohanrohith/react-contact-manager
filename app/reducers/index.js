import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import contacts from './contacts';

const rootReducer = combineReducers({
    contacts,
    routing
});

export default rootReducer;
