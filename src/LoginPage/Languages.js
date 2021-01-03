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
                    <div className="plus-icon-ctn"><div className="plus-icon"></div></div>
                </div>
                
                <div className="tablet-languages-ctn">
                    <h2 className="selected-language tablet-language">English</h2>
                    <h2 className="tablet-language">Español</h2>
                    <h2 className="tablet-language">Français (France)</h2>
                    <h2 className="tablet-language">中文(简体)</h2>
                    <h2 className="tablet-language">العربية</h2>
                    <h2 className="tablet-language">Português (Brasil)</h2>
                    <h2 className="tablet-language">한국어</h2>
                    <h2 className="tablet-language">Italiano</h2>
                    <h2 className="tablet-language">Deutsch</h2>
                    <h2 className="tablet-language">हिन्दी</h2>
                    <h2 className="tablet-language">日本語</h2>
                    <div className="plus-icon-ctn tablet"><div className="plus-icon tablet"></div></div>
                </div>
                
            </div>
        );
    }
}

export default Languages;