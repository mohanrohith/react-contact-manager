import * as types from './types';

export function addContact(contact) {
    return {
        type: types.CONTACTS_ADD,
        contact
    };
}

export function deleteContact(id) {
    return {
        type: types.CONTACTS_DELETE,
        id
    };
}

export function editContact(contact) {
    return {
        type: types.CONTACTS_EDIT,
        contact
    };
}

export function preloadContact(contact) {
    return {
        type: types.CONTACTS_PRELOAD,
        contact
    };
}
