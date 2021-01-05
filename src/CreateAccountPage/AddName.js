import React, { Component } from 'react';
import facebookUsers from '../UserList';
import { Link } from 'react-router-dom';
import HeaderCreateAccount from './HeaderCreateAccount'
import Languages from '../LoginPage/Languages';

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
            <div className="add-name-ctn">
                <HeaderCreateAccount />
                <div className="name-info-ctn">
                    <div className="create-account-title-ctn">
                        <h1 className="create-name-title" >What's your name?</h1>
                        <p className="enter-name">Enter the name you use in real life.</p>
                    </div>
                    <div className="create-name-ctn">
                        <div className="first-name-ctn input-ctn">
                            <label htmlFor="">First Name</label>
                            <input onChange={this.onChange} className="create-first-name" type="text"/>
                        </div>
                        <div className="password-ctn input-ctn">
                            <label htmlFor="">Last Name</label>
                            <input onChange={this.onChange} className="create-last-name" type="text"/>
                        </div>
                    </div>
                        <Link to="/">
                            <div className="next-btn-ctn">
                                <button onClick={this.onNext} className="next-btn">Next</button>
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

export default AddName;