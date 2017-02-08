import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../app/components/App';

describe("COMPONENTS:: App", function() {
    var appComponent;

    beforeEach(function(){
        appComponent = shallow(
            <App>
                <div className="unique" />
            </App>
        );
    });

    it("should render header", function(){
        expect(appComponent.find('.bs-header')).to.have.length(1);
    });

    it("should render main container", function(){
        expect(appComponent.find('.main-container')).to.have.length(1);
    });

    it("should render children", function(){
        expect(appComponent.contains(<div className="unique" />)).to.equal(true);
    });

});
