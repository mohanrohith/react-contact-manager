import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Contacts from '../../app/components/Contacts';

describe("COMPONENTS:: Contacts", function() {
    var contactComponent;

    beforeEach(function(){
        contactComponent = shallow(<Contacts />);
    });

    it("should render add contact button", function(){
        expect(contactComponent.find('.btn')).to.have.length(1);
    });
    
});
