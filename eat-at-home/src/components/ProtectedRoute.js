import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    // Redirects traffic home if there is no cookie; unfortunately, cookies still exist after logout, will need better solution
    render() {
        // console.log(`Logged In: ${this.props.isLoggedIn}`)
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