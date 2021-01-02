import GetApp from './GetApp';
import Login from './Login';
import SignUp from './SignUp';
import './LoginPage.css';
import PageBreak from './PageBreak';
import Languages from './Languages';
import Footer from './Footer';
import LoginHeader from './LoginHeader'
import LoginBackground from './LoginBackground';

function LoginPage() {
  return ( 
    <div className="component-container">
      <LoginBackground />
      <GetApp />
      <LoginHeader />
      <div className="login-create-ctn">
        <Login />
        <PageBreak />
        <SignUp />

      </div>
      <Languages />
      <Footer />
    </div>
    
  );
}

export default LoginPage;
