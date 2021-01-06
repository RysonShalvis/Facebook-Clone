import React, { Component } from 'react';
import facebookUsers from '../UserList';
import { Link } from 'react-router-dom';
import HeaderCreateAccount from './HeaderCreateAccount';
import Languages from '../LoginPage/Languages';
import './CreateAccountPage.css';

const userCreator = (name,lastName) => {
            return {
                email: name,
                lastName: lastName
            }
}

class AddName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            didClickNext: false
        }
        this.onChange = this.onChange.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onChange(e) {
        e.target.classList[0] === 'create-first-name' ? this.setState({firstName: e.target.value},) : this.setState({lastName: e.target.value},a => console.log(this.state.lastName));
    }

    onNext(e) {
        facebookUsers.push(userCreator(this.state.firstName,this.state.lastName));
        console.log(facebookUsers);
        this.setState({didClickNext: true})
    }
    

    render() {
        const pleaseEnterName = this.state.didClickNext && this.state.firstName === '' || this.state.didClickNext && this.state.lastName === '' ? <p className="please-name">Enter your first and last Name</p> : ''
        const ConditionalLink = this.state.firstName !== '' && this.state.lastName !== '' ? Link : 'div';
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
                        <div className="last-name-ctn input-ctn">
                            <label htmlFor="">Last Name</label>
                            <input onChange={this.onChange} className="create-last-name" type="text"/>
                        </div>
                    </div>
                        {pleaseEnterName}
                        <ConditionalLink to="/create-account/birthday">
                            <div className="next-btn-ctn">
                                <button onClick={this.onNext} className="next-btn">Next</button>
                            </div>
                        </ConditionalLink>
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