import {expect} from 'chai';
import contact from '../../app/reducers/contact';
import * as types from '../../app/actions/types';

describe("REDUCER::CONTACT", function() {
    it("handles CONTACTS_PRELOAD", function(){
        const initialState = {};
        const action = {
            type: types.CONTACTS_PRELOAD,
            contact: {
                name: 'abc',
                email: 'abc@example.com',
                tel: '12345'
            }
        };

        const nextState = contact(initialState, action);
        // Avoiding object comparison as avatar is random
        expect(nextState.id).to.equal(1);
        expect(nextState.name).to.equal('abc');
        expect(nextState.email).to.equal('abc@example.com');
        expect(nextState.tel).to.equal('12345');
    });

    it("handles CONTACTS_ADD", function(){
        const initialState = {};
        const action = {
            type: types.CONTACTS_ADD,
            contact: {
                name: 'abc',
                email: 'abc@example.com',
                tel: '12345'
            }
        };

        const nextState = contact(initialState, action);
        // Avoiding object comparison as avatar is random
        expect(nextState.id).to.equal(2);
        expect(nextState.name).to.equal('abc');
        expect(nextState.email).to.equal('abc@example.com');
        expect(nextState.tel).to.equal('12345');
    });

    it("handles CONTACTS_EDIT", function(){
        const initialState = {
                id: 2,
                name: 'abc',
                email: 'abc@example.com',
                tel: '12345'
            };
        const action = {
            type: types.CONTACTS_EDIT,
            contact: {
                name: 'xyz',
                email: 'abc@example.com',
                tel: '7890'
            }
        };

        const nextState = contact(initialState, action);
        // Avoiding object comparison as avatar is random
        expect(nextState.id).to.equal(2);
        expect(nextState.name).to.equal('xyz');
        expect(nextState.email).to.equal('abc@example.com');
        expect(nextState.tel).to.equal('7890');
    });
});

