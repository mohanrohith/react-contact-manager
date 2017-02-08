import React from 'react';
import { browserHistory, Link } from 'react-router';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { contact } = this.props;
        let formObj = {
            name: this.nameInput.value,
            email: this.emailInput.value,
            tel: this.telInput.value
        };
        if(contact) {
            formObj = Object.assign({}, formObj, { id: contact.id});
        }
        this.props.onSubmit(formObj);
        browserHistory.push('/contacts');
    }

    render() {
        let { contact } = this.props;
        contact = contact || {};
        return (
            <div>
                <form role="form" className="form-horizontal contract-form" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Full name:</label>
                        <div className="col-sm-6">
                            <input
                                type="text"
                                defaultValue={contact.name}
                                ref={node => {this.nameInput = node;}}
                                className="form-control contact-name-input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email address:</label>
                        <div className="col-sm-6">
                            <input
                                type="email"
                                defaultValue={contact.email}
                                ref={node => {this.emailInput = node;}}
                                className="form-control contact-email-input"  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Telephone number:</label>
                        <div className="col-sm-6">
                            <input
                                type="tel"
                                defaultValue={contact.tel}
                                ref={node => {this.telInput = node;}}
                                className="form-control contact-tel-input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-3">
                            <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/contacts" className="btn btn-outline btn-lg btn-block">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

ContactForm.propTypes = {
    isNew: React.PropTypes.bool,
    contact: React.PropTypes.object,
    onSubmit: React.PropTypes.func
};

export default ContactForm;
