import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import UserPage from './UserPage/UserPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AddName from './CreateAccountPage/AddName';
import AddBirthday from './CreateAccountPage/AddBirthday';
 
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>    
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/userpage" exact component={UserPage} />
                        
                        <Route path="/create-account/name" component={AddName} />
                        <Route path="/create-account/birthday" component={AddBirthday} /> 
                        
                    </Switch>
                </div>
            </Router>
            
        );
    }
}

export default App;