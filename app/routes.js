import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Contacts from './components/Contacts';
import Home from './components/Home';
import ContactNew from './containers/ContactNew';
import ContactEdit from './containers/ContactEdit';

export default (
	<Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/contacts/new" component={ContactNew} />
        <Route path="/contacts/edit/:id" component={ContactEdit} />
    </Route>
);
