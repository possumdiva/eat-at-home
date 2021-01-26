import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    // Redirects traffic home unless there is both cookie and successful API call for ID number
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const Component = this.props.component;
        if (isLoggedIn === true) {
            return <Component />
        } else {
            return <Redirect to={{ pathname: '/' }} />
        }
    }
}

export default ProtectedRoute