import React, { Component } from 'react';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import { Link } from 'react-router-dom';

class ChooseGender extends Component {
    render() {
        return (
            <div>
                <HeaderCreateAccount />
                <div className="name-info-ctn">
                    <div className="create-account-title-ctn">
                        <h1 className="create-name-title create-birthday-title" >What's your gender?</h1>
                        <p className="enter-name enter-birthday">You can change who sees your gender on your profile later.</p>
                    </div>
                    <div className="gender-ctn">
                        <label className="gender-label" htmlFor="female">Female</label>
                        <input name="female" className="add-gender" type="radio"/>
                    </div>
                    <div className="gender-ctn">
                        <label className="gender-label" htmlFor="male">Male<span className="white-space">Fe</span></label>
                        <input name="male" className="add-gender" type="radio"/>
                    </div>
                    <div className="gender-ctn">
                        <label className="gender-label" htmlFor="custom">Custom</label>
                        <input name="custom" className="add-gender" type="radio"/>
                    </div>
                    
                    <p className="custom-gender">Select Custom to choose another gender, or if you'd rather not say.</p>
                    <Link to="/create-account/password">
                        <div className="next-btn-ctn">
                            <button className="next-btn">Next</button>
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

export default ChooseGender;