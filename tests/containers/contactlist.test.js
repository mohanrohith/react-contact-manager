import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from '../../app/store/configureStore';
import ContactList from '../../app/containers/ContactList';

describe("CONTAINER:: ContactList", function() {
    var store = configureStore();
    var container;

    beforeEach(() => {
        container = render( 
            <Provider store = { store } >
            <ContactList />
            </Provider>
        );
    });

    it('Renders main container', () => {
        expect(container.find('.contacts-container')).to.have.length(1);
    });
});
