import React, { Component } from 'react';

class Languages extends Component {
    render() {
        return (
            <div>
                <div className="languages-ctn mobile">
                    <h2 className="selected-language language">English</h2>
                    <h2 className="language">Français (France)</h2>
                    <h2 className="language">Português (Brasil)</h2>
                    <h2 className="language">Italiano</h2>
                    <h2 className="language">Español</h2>
                    <h2 className="language">中文(简体)</h2>
                    <h2 className="language">Deutsch</h2>
                    <div className="plus-icon">+</div>
                </div>
                <div className="tablet-languages-ctn">
                    <h2 className="selected-language tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <h2 className="tablet-language">English</h2>
                    <div className="plus-icon">+</div>
                </div>
            </div>
        );
    }
}

export default Languages;