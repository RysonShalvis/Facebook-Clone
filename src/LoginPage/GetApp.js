import React, { Component } from 'react';
import facebookIcon from '../facebook-browse-faster-icon.png'


class GetApp extends Component {
    render() {
        return (
            <div className="header-ctn">
                <div className="get-app-ctn">
                <img className="mobile-facebook-icon" src={facebookIcon} alt=""/>
                    <p className="get-app">Get Facebook for iPhone and browse faster.</p>
                </div>
            </div>
        );
    }
}

export default GetApp;