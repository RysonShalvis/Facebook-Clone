import React, { Component } from 'react';
import AddName from './AddName';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './CreateAccountPage.css';

class CreateAccountPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/create-account/name" component={AddName} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default CreateAccountPage;