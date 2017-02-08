import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ContactNew from '../../app/containers/ContactNew';
import * as Actions from '../../app/actions';
import * as Types from '../../app/actions/types';

describe("CONTAINER:: ContactNew", function() {
    const mockStore = configureStore([]);
    const store = mockStore({});
    let container;
    
    beforeEach(function(){
        container = mount( 
            <Provider store = { store } >
                <ContactNew/>
            </Provider>
        );
    });

    it('Renders header', function() {
        expect(container.find('.page-header').text()).to.equal("Create Contact");
    });

    it('should add new contact', function() {
        const contact = {
            name: "Rohith",
            email: "qaz@example.com",
            tel: "12345"
        }
        expect(store.getActions().length).to.equal(0);
        store.dispatch(Actions.addContact(contact));
        expect(store.getActions().length).to.equal(1);
        expect(store.getActions()[0].type).to.equal(Types.CONTACTS_ADD);
    });
});
