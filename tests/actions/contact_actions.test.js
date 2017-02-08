import {expect} from 'chai';
import * as actions from '../../app/actions/index';
import * as types from '../../app/actions/types';

describe("Action::CONTACT", function() {
    it('creates addContact', function(){
        const contact = {
            name: 'abc',
            email: 'abc@example.com',
            tel: '81234'
        };
        const expectedAction = {
            type: types.CONTACTS_ADD,
            contact
        };
        expect(actions.addContact(contact)).deep.equal(expectedAction);
    });

    it('creates deleteContact', function(){
        const id = 3;
        const expectedAction = {
            type: types.CONTACTS_DELETE,
            id
        };
        expect(actions.deleteContact(id)).deep.equal(expectedAction);
    });

    it('creates editContact', function(){
        const contact = {
            name: 'abc',
            email: 'abc@example.com',
            tel: '81234'
        };
        const expectedAction = {
            type: types.CONTACTS_EDIT,
            contact
        };
        expect(actions.editContact(contact)).deep.equal(expectedAction);
    });

    it('creates preloadContact', function(){
        const contact = {
            name: 'abc',
            email: 'abc@example.com',
            tel: '81234'
        };
        const expectedAction = {
            type: types.CONTACTS_PRELOAD,
            contact
        };
        expect(actions.preloadContact(contact)).deep.equal(expectedAction);
    });
});