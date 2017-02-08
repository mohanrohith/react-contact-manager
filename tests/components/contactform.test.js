import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ContactForm from '../../app/components/ContactForm';

describe("COMPONENTS:: ContactForm", function() {
    var formComponent;

    beforeEach(function(){
        formComponent = shallow(<ContactForm />);
    });

    it("should render ", function(){
        expect(formComponent.find('.contract-form')).to.have.length(1);
    });
});
