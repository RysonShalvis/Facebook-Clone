import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class SignUp extends Component {
    render() {
        return (
            <div>
                <Link to="/create-account/name">
                    <button className="sign-up-btn" >Create New Account</button>
                </Link>
                
                <a className="forgot-password" href="">
                    <h2>forgot password?</h2>
                </a>
                
            </div>
        );
    }
}

export default SignUp;