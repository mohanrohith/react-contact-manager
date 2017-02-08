import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from '../../app/store/configureStore';
import ContactEdit from '../../app/containers/ContactEdit';

describe("CONTAINER:: ContactEdit", function() {
    var store = configureStore();
    var container;

    beforeEach(() => {
        container = render( 
            <Provider store = { store } >
                <ContactEdit />
            </Provider>
        );
    });

    it('Renders header', () => {
        expect(container.find('.page-header').text()).to.equal("Edit Contact");
    });
});
