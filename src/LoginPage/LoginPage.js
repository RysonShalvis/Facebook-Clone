import React from 'react';
import GetApp from './GetApp';
import Login from './Login';
import SignUp from './SignUp';
import './LoginPage.css';
import PageBreak from './PageBreak';
import Languages from './Languages';
import Footer from './Footer';
import LoginHeader from './LoginHeader'
import LoginBackground from './LoginBackground';
import LoginCreatePage from './LoginCreatePage';
import DesktopCreateAccount from './DesktopCreateAccount';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bigScreenSize: false
    }

    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  onClickSignUp() {
   if (window.screen.width > 479) {
     this.setState({ bigScreenSize: true});
     
    }
  }

  buttonOnClick() {
    this.setState({bigScreenSize: false});
  }

  render () {

    return ( 
      <div className="component-container">
        <div style={{position: 'absolute'}} className="tablet-sign-up-ctn">
          {this.state.bigScreenSize ? <DesktopCreateAccount onClick={this.buttonOnClick} /> : ''}
        </div>
          <LoginBackground />
          <GetApp />
        <div className="main-ctn">
          <LoginHeader />
          <div className="form-create-page-ctn">
            <div className="login-create-ctn">
              <Login />
              <PageBreak />
              <SignUp onClick={this.onClickSignUp} />
            </div>
            <LoginCreatePage />
          </div>
        </div>
        <div className="langauge-footer-ctn">
          <Languages />
          <Footer />
        </div>
      </div>
      
    );
  }
}

export default LoginPage;
