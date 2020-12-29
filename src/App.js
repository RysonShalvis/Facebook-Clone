import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import UserPage from './UserPage/UserPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateAccountPage from './CreateAccountPage/CreateAccountPage';
 
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>    
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/userpage" exact component={UserPage} />
                        <Route path="/create-account/name" exact component={CreateAccountPage} />
                        
                    </Switch>
                </div>
            </Router>
            
        );
    }
}

export default App;