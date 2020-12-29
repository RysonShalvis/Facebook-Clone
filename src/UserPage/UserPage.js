import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {

    

    render() {

        
        return (
            <div>
               <p>test</p> 
               <Link to="/">
               
               <input type="button" value="log out" />
               </Link>
            </div>
        );
    }
}

export default UserPage;