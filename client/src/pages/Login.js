import { useState } from "react";
import background from "../styles/login-bg.jpg";
import logo from "../styles/logo.png"

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useHistory, Link } from "react-router-dom";
import "../styles/Login.css";
function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login">
      <div className="logo-container">
        <Link to="/">        
        <img src={logo} className="login-logo"></img></Link>

      </div>
        <div className="hero-background-container">
          <img src={background} className="hero-background"></img>
        </div>




        {showLogin ? (
          <div className="login-form-container">
            <LoginForm onLogin={onLogin} setShow={setShowLogin}/>
            <div />
            

          </div>
        ) : (
          <div className="login-form-container">
            <SignUpForm onLogin={onLogin} setShow={setShowLogin} />
            <div />
           

          </div>
        )}
      </div>
  );
}

export default Login;
