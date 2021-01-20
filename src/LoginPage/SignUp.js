import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class SignUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Condition = window.screen.width > 479 ? 'div' : Link
        return (
            <div className="sign-up-ctn">
                <Condition to="/create-account/name">
                    <button onClick={this.props.onClick} className="sign-up-btn" >Create New Account</button>
                </Condition>
                
                <a className="mobile forgot-password" href="">
                    <h2>Forgot Password?</h2>
                </a>
                
            </div>
        );
    }
}

export default SignUp;