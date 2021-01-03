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

function LoginPage() {
  return ( 
    <div className="component-container">
        <LoginBackground />
        <GetApp />
      <div className="main-ctn">
        <LoginHeader />
        <div className="form-create-page-ctn">
          <div className="login-create-ctn">
            <Login />
            <PageBreak />
            <SignUp />
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

export default LoginPage;
