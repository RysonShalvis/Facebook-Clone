import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-ctn">
                <Link to="/create-account/name">
                    <button className="sign-up-btn" >Create New Account</button>
                </Link>
                
                <a className="mobile forgot-password" href="">
                    <h2>Forgot Password?</h2>
                </a>
                
            </div>
        );
    }
}

export default SignUp;