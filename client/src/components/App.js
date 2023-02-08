import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import AddProfile from "../pages/AddProfile";
import EditProfile from "../pages/EditProfile";
import EditIndividualProfile from "../pages/EditIndividualProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";
import Browse from "../pages/Browse";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter"


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <main>
        <Switch>
        
            <Route path="/login">
              <Login user={user} onLogin={setUser} />
              <LoginFooter />
          </Route>
           <Route path="/profile">
              <Profile></Profile>
          </Route>
          <Route path="/add-profile">
              <AddProfile></AddProfile>
          </Route>
          <Route path="/edit-profile">
              <EditProfile></EditProfile>
          </Route>
          <Route path="/my-profile/:id">
              <EditIndividualProfile></EditIndividualProfile>
          </Route>
          <Route path="/browse">
              <NavBar user={user} setUser={setUser} />
              <Browse user={user} />
              <Footer />
          </Route>

          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
