import React, { Component } from 'react';
import facebookUsers from '../UserList';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


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

    delayRedirect() {
       
      }

    onSubmit(e) {
        

        let isUser = false;
        facebookUsers.forEach(c => c.email === this.state.email && this.state.password === c.password ? isUser = true : '');
        console.log(isUser);
        this.setState({correctLogin: isUser});
        if (isUser) {
            this.setState({reRoute: `/userpage/${this.state.email}`},a => console.log(this.state.reRoute))
        }
        
    }

    

    render() {
        return (
            <form action="">
                <h2>facebook</h2>
                <input onChange={this.onChange} className="login-username mobile" type="text" placeholder="Mobile number or email" />
                <input onChange={this.onChange} className="login-password mobile" type="text" placeholder="Password" />
                <input onChange={this.onChange} className="login-username tablet" type="text" placeholder="Email or Phone Number" />
                <input onChange={this.onChange} className="login-password tablet" type="text" placeholder="Password" />
                <Link to={this.state.reRoute} onClick={this.delayRedirect}>
                    <button onClick={this.onSubmit} className="login-btn">Log in</button>
                </Link>
                <div className="desktop forgot-password">Forgot Password?</div>
            </form>
        );
    }
}

export default Login;