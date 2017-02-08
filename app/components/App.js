import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <header className="bs-header">
                  <div className="container">
                    <h1>Contact Manager</h1>
                  </div>
                </header>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 main-container">
                        { this.props.children }
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
