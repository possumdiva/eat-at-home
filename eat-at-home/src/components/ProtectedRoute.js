import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    
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