import React from 'react';
import { browserHistory } from 'react-router';

class Contact extends React.Component {
    componentDidMount() {
        browserHistory.push('/contacts');
    }
    render() {
        return null;
    }
}

export default Contact;
