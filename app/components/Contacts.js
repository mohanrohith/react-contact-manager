import React from 'react';
import ContactList from '../containers/ContactList';
import { Link } from 'react-router';

class Contacts extends React.Component {
    render() {
        return (
            <div>
                <h2 className="page-header text-center">List of contacts</h2>
                <p className="text-center">
                    <Link to="/contacts/new" className="btn btn-lg btn-outline">
                        Add Contact
                    </Link>
                </p>
                <ContactList />
            </div>
        );
    }
}
export default Contacts;
