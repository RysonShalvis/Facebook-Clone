import React, { Component } from 'react';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import { Link } from 'react-router-dom';



class AddBirthday extends Component {
    render() {
        return (
            <div>
                <HeaderCreateAccount />
                <h1>HEYOTDOEccc</h1>
                <Link to="/">
                    <div className="next-btn-ctn">
                        <button className="next-btn">Next</button>
                    </div>
                </Link>
                <Languages />
            </div>
        );
    }
}

export default AddBirthday;