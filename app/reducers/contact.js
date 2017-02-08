import * as types from '../actions/types';

const initialState = {};
let id = 0;

function getRandom(min, max) {
    const mn = Math.ceil(min);
    const mx = Math.floor(max);
    return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.CONTACTS_PRELOAD:
        case types.CONTACTS_ADD:
            return {
                id: ++id,
                name: action.contact.name,
                tel: action.contact.tel,
                email: action.contact.email,
                avatar: getRandom(1, 15) + '.jpg'
            };
        case types.CONTACTS_EDIT:
            return Object.assign({}, state, {
                name: action.contact.name,
                tel: action.contact.tel,
                email: action.contact.email
            });
        default:
            return state;
    }
}
