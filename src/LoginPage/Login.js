import React, { Component } from 'react';
import facebookUsers from '../UserList';
import { Link } from 'react-router-dom';



class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            correctLogin: false,
            reRoute: '/',
            delay: 2000,
            t: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.target.classList[0] === 'login-username' ? this.setState({email: e.target.value}) : this.setState({password: e.target.value});
    }

    

    onSubmit(e) {
        

        let isUser = false;
        facebookUsers.forEach(c => c.email === this.state.email && this.state.password === c.password ? this.setState({correctLogin: true,reRoute: `/userpage/${this.state.email}`}) : '');
        
        
    }

    

    render() {

        const ConditionalLink = this.state.correctLogin ? Link : 'div';

        return (
            <form className="form-ctn" action="">
                <h2 className="form-title">facebook</h2>
                <input onChange={this.onChange} className="login-username mobile login" type="text" placeholder="Mobile number or email" />
                <input onChange={this.onChange} className="login-password mobile login" type="text" placeholder="Password" />
                <input onChange={this.onChange} className="login-username tablet login" type="text" placeholder="Email or Phone Number" />
                <input onChange={this.onChange} className="login-password tablet login" type="text" placeholder="Password" />
                <ConditionalLink to={this.state.reRoute}>
                    <button onClick={this.onSubmit} className="login-btn">Log in</button>
                </ConditionalLink>
                <div className="tablet forgot-password">Forgot Password?</div>
            </form>
        );
    }
}

export default Login;