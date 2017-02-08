import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Contact from '../../app/components/Contact';

describe("COMPONENTS:: Contact", function() {
    let contactComponent;
    let onDeleteContact;

    const contact = {
        name: 'Rohith',
        email: 'qaz@example.com',
        tel: '12345',
        avatar: '9.jpg'
    }

    beforeEach(function(){
        onDeleteContact = sinon.spy();
        contactComponent = shallow(<Contact contact={contact} onDeleteContact={onDeleteContact} />);
    });

    it("should render ", function(){
        expect(contactComponent.find('.media-body').text()).to.equal("Phone Number:12345Email:qaz@example.com");
    });

    it("should simulate delete contact", function(){
        contactComponent.find(".action-delete").simulate('click');
        expect(onDeleteContact).to.have.property('callCount', 1);
    });
});
