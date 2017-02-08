import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import * as Actions from '../actions';

class ContactNew extends React.Component {
    render() {
        return (
            <div>
                <h2 className="page-header text-center">Create Contact</h2>
                <ContactForm isNew onSubmit={this.props.onAddContact} />
            </div>
        );
    }
}

ContactNew.propTypes = {
    isNew: React.PropTypes.bool,
    onAddContact: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddContact: contact => dispatch(Actions.addContact(contact))
    };
};


export default connect(null, mapDispatchToProps)(ContactNew);
