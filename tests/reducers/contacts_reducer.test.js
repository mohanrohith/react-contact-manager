import { expect } from 'chai';
import contacts from '../../app/reducers/contacts';
import * as types from '../../app/actions/types';

describe("REDUCER::CONTACTS", function() {
    it("handles CONTACTS_PRELOAD", function() {
        const initialState = [];
        const action = {
            type: types.CONTACTS_PRELOAD,
            contact: {
                name: 'abc',
                email: 'abc@example.com',
                tel: '12345'
            }
        };

        let nextState = contacts(initialState, action);
        expect(nextState.length).to.equal(1);
        nextState = contacts(nextState, action);
        expect(nextState.length).to.equal(2);
    });

    it("handles CONTACTS_ADD", function() {
        const initialState = [];
        const action = {
            type: types.CONTACTS_ADD,
            contact: {
                name: 'abc',
                email: 'abc@example.com',
                tel: '12345'
            }
        };

        let nextState = contacts(initialState, action);
        expect(nextState.length).to.equal(1);
        expect(nextState[0].name).to.equal('abc');
        expect(nextState[0].email).to.equal('abc@example.com');
        expect(nextState[0].tel).to.equal('12345');
    });

    it("handles CONTACTS_EDIT", function() {
        const initialState = [{
            id: 2,
            name: 'abc',
            email: 'abc@example.com',
            tel: '12345'
        }, {
            id: 3,
            name: 'xyz',
            email: 'abc@example.com',
            tel: '56789'
        }, ];
        const action = {
            type: types.CONTACTS_EDIT,
            contact: {
                id: 3,
                name: 'xyz',
                email: 'abc@example.com',
                tel: '7890'
            }
        };

        const nextState = contacts(initialState, action);
        const contact = nextState.filter((c)=>{ return c.id === 3});
        expect(contact[0].name).to.equal('xyz');
        expect(contact[0].email).to.equal('abc@example.com');
        expect(contact[0].tel).to.equal('7890');
    });

    it('handles CONTACTS_DELETE', function(){
        const initialState = [{
            id: 2,
            name: 'abc',
            email: 'abc@example.com',
            tel: '12345'
        }, {
            id: 3,
            name: 'xyz',
            email: 'abc@example.com',
            tel: '56789'
        }, ];

        const action = {
            type: types.CONTACTS_DELETE,
            id: 3
        };
        const nextState = contacts(initialState, action);
        expect(nextState.length).to.equal(1);
        expect(nextState[0].id).to.equal(2);
    });
});
