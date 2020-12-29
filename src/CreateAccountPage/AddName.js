import React, { Component } from 'react';
import facebookUsers from '../UserList';
import { Link } from 'react-router-dom';

const userCreator = (name,password) => {
            return {
                email: name,
                password: password
            }
}

class AddName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onChange(e) {
        e.target.classList[0] === 'create-first-name' ? this.setState({firstName: e.target.value},) : this.setState({password: e.target.value},a => console.log(this.state.password));
    }

    onNext(e) {
        facebookUsers.push(userCreator(this.state.firstName,this.state.password));
        console.log(facebookUsers)
    }
    

    render() {
        return (
            <div>
                <h1 className="create-name-title" >What's your name?</h1>
                <p className="enter-name">Enter the name you use i real life.</p>
                <div className="create-name-ctn">
                    <div className="first-name-ctn">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.onChange} className="create-first-name" type="text"/>
                    </div>
                    <div className="password-ctn">
                        <label htmlFor="">Password</label>
                        <input onChange={this.onChange} className="create-password" type="text"/>
                    </div>
                    <Link to="/">
                        <button onClick={this.onNext} className="name-btn">Next</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AddName;