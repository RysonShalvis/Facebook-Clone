import GetApp from './GetApp';
import Login from './Login';
import SignUp from './SignUp';
import './LoginPage.css';
import PageBreak from './PageBreak';
import Languages from './Languages';
import Footer from './Footer';

function LoginPage() {
  return ( 
    <div className="component-container">
      <GetApp />
      <Login />
      <PageBreak />
      <SignUp />
      <Languages />
      <Footer />
    </div>
    
  );
}

export default LoginPage;
