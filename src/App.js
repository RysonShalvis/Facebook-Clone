import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import UserPage from './UserPage/UserPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddName from './CreateAccountPage/AddName';
import AddBirthday from './CreateAccountPage/AddBirthday';
import AddAge from './CreateAccountPage/AddAge';
import EnterNumber from './CreateAccountPage/EnterNumber';
import ChooseGender from './CreateAccountPage/ChooseGender';
import CreatePassword from './CreateAccountPage/CreatePassword';
import DesktopCreateAccount from './LoginPage/DesktopCreateAccount';
 
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
                        <Route path="/create-account/age" component={AddAge} /> 
                        <Route path="/create-account/phonenumber" component={EnterNumber} /> 
                        <Route path="/create-account/gender" component={ChooseGender} /> 
                        <Route path="/create-account/password" component={CreatePassword} /> 
                        
                    </Switch>
                </div>
            </Router>
            
        );
    }
}

export default App;