import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Contact from '../components/Contact';

class ContactList extends React.Component {
    render() {
        const { contacts } = this.props;
        return (
            <ul className="media-list row contacts-container">
                {contacts.map((contact, index)=>{
                    return(
                        <li key={index} className="media col-md-6 col-lg-4">
                            <Contact contact={contact} onDeleteContact={this.props.onDeleteContact}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    onAddContact: PropTypes.func,
    onEditContact: PropTypes.func,
    onDeleteContact: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddContact: contact => dispatch(Actions.addContact(contact)),
        onEditContact: contact => dispatch(Actions.editContact(contact)),
        onDeleteContact: id => dispatch(Actions.deleteContact(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
