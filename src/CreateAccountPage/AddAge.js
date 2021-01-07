import React, { Component } from 'react';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import { Link } from 'react-router-dom';

class AddAge extends Component {
    render() {
        return (
            <div>
                <HeaderCreateAccount />
                <div className="name-info-ctn">
                    <div className="create-account-title-ctn">
                        <h1 className="create-name-title create-birthday-title" >How old are you?</h1>
                        <p className="enter-name enter-birthday">Your age isn't visible on your profile. You can change who sees this later.</p>
                    </div>
                    <div className="age-ctn">
                        <label className="age-label" htmlFor="">Age</label>
                        <input className="create-age" type="text"/>
                    </div>
                <Link to="/create-account/phonenumber">
                    <div className="next-btn-ctn">
                        <button className="next-btn">Next</button>
                    </div>
                </Link>
                <p className="use-date-of-birth">Use Date of Birth</p>
                <p className="already-have-account">Already have an account?</p>
                </div>
                <Languages />
            </div>
        );
    }
}

export default AddAge;