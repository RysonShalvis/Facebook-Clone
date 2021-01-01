import React, { Component } from 'react';

class PageBreak extends Component {
    render() {
        return (
            <div className="page-break-ctn">
                <div className="line-break"></div>
                <h4 className="page-break" >or</h4>
                <div className="line-break mobile"></div>
            </div>
            
        )
    }
}

export default PageBreak;