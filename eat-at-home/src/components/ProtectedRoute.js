import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    // Redirects traffic home if there is no cookie; unfortunately, cookies still exist after logout, will need better solution
    render() {
        const Component = this.props.component;
        let theCookies = document.cookie;
        let hereOrNot = parseInt(theCookies.search("connect.sid"));
        if (hereOrNot === 0) {
            return <Component />
        } else {
            return <Redirect to={{ pathname: '/' }} />
        }
    }
}

export default ProtectedRoute