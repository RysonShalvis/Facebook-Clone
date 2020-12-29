import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-ctn">
                <div className="footer-more">
                    <p className="footer about">About</p>
                    <p className="footer bullet">.</p>
                    <p className="footer">Help</p>
                    <p className="footer bullet">.</p>
                    <p className="footer">More</p>
                    <p className="trademark">Facebook Inc.</p>
                </div>
            </div>
        );
    }
}

export default Footer;