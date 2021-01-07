import React, { Component } from 'react';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import { Link } from 'react-router-dom';

class EnterNumber extends Component {
    render() {
        return (
            <div>
                <HeaderCreateAccount />
                <div className="name-info-ctn">
                    <div className="create-account-title-ctn">
                        <h1 className="create-name-title create-birthday-title" >Enter Your Phone Number</h1>
                        <p className="enter-name enter-birthday">Enter the mobile number where you can be reached. You can hide this from your profile later.</p>
                    </div>
                    <div className="phone-ctn">
                        <label className="phone-label" htmlFor="">Phone number</label>
                        <input className="add-number" type="text"/>
                    </div>
                <Link to="/">
                    <div className="next-btn-ctn">
                        <button className="next-btn">Next</button>
                    </div>
                </Link>
                <p className="use-date-of-birth">Sign Up with Email</p>
                <p className="already-have-account">Already have an account?</p>
                </div>
                <Languages />
            </div>
        );
    }
}

export default EnterNumber;