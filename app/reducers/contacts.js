import * as types from '../actions/types';
import contact from './contact';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case types.CONTACTS_PRELOAD:
        case types.CONTACTS_ADD:
            return [...state, contact(undefined, action)];
        case types.CONTACTS_EDIT:
            return state.map((contct) => {
                if (action.contact.id === contct.id) {
                    return contact(contct, action);
                }
                return contct;
            });
        case types.CONTACTS_DELETE:
            return state.filter((contct) => {
                return action.id !== contct.id;
            });
        default:
            return state;
    }
}
