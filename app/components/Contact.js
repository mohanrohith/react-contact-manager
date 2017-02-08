import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
    render() {
        const { contact } = this.props;
        return (
            <div className="card">
                <div className="thumbnail">
                    <img className="media-object" src={'app/img/faces/' + contact.avatar} />
                </div>
                <div className="media-heading">
                    <h3>{contact.name}</h3>
                </div>
                <div className="media-body">
                    <dl>
                        <dt>Phone Number:</dt>
                        <dd>{contact.tel}</dd>
                        <dt>Email:</dt>
                        <dd>{contact.email}</dd>
                    </dl>
                </div>
                <div className="card-action">
                    <Link to={'/contacts/edit/' + contact.id} className="action-item">EDIT</Link>
                    <span className="action-item action-delete" onClick={()=>{
                        this.props.onDeleteContact(contact.id);
                    }}>DELETE</span>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object,
    onDeleteContact: PropTypes.func
};


export default Contact;
