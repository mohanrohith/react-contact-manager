import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import * as Actions from '../actions';

class ContactEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {}
        };
    }

    componentWillMount() {
        const { params, contacts } = this.props;
        const contact = contacts.filter((c)=>{
            return parseInt(params.id, 10) === c.id;
        });
        if(!!contact.length) {
            this.setState({
                contact: contact[0]
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="page-header text-center">Edit Contact</h2>
                <ContactForm isNew={false} onSubmit={this.props.onEditContact} contact={this.state.contact} />
            </div>
        );
    }
}

ContactEdit.propTypes = {
    params: React.PropTypes.object,
    isNew: React.PropTypes.bool,
    contacts: React.PropTypes.array,
    onEditContact: React.PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEditContact: contact => dispatch(Actions.editContact(contact))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEdit);
