import React, { Component } from 'react';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import { Link } from 'react-router-dom';

class CreatePassword extends Component {
    render() {
        return (
            <div>
                <HeaderCreateAccount />
                <div className="name-info-ctn">
                    <div className="create-account-title-ctn">
                        <h1 className="create-name-title create-birthday-title" >Choose a Password</h1>
                        <p className="enter-name enter-birthday">Create a password with at least 6 characters. It should be something others couldn't guess.</p>
                    </div>
                    <div className="phone-ctn">
                        <label className="phone-label" htmlFor="">New password</label>
                        <input className="add-number" type="text"/>
                    </div>
                    <p className="use-date-of-birth">By tapping Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may recieve SMS notifications from us and can opt out any time</p>
                <Link to="/">
                    <div className="next-btn-ctn">
                        <button className="next-btn finish-sign-up">Sign Up</button>
                    </div>
                </Link>
                <p className="already-have-account">Already have an account?</p>
                </div>
                <Languages />
                <div className="trademark-ctn">
                    <p className="trademark">Facebook Inc.</p>
                </div>
            </div>
        );
    }
}

export default CreatePassword;