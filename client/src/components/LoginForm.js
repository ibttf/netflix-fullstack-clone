import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import "../styles/LoginForm.css";
function LoginForm({ onLogin, setShow }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/browse");
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <div className="login-form">
      <h1>Sign In</h1>

        <div className="errors">
          {errors ? (
            errors.map((err) => <div key={err} className="error">Oops! {err}</div>)
          ) : (
            <></>
          )}
        </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="username"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign In"}</button>
        <div className="login-text">            
              <p className="small-text">
                Don't have an account? &nbsp;
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Sign Up
                </button>
              </p>
            </div>
      </form>
    </div>
  );
}

export default LoginForm;
