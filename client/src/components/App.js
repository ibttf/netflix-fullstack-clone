import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import AddProfile from "../pages/AddProfile";
import EditProfile from "../pages/EditProfile";
import EditIndividualProfile from "../pages/EditIndividualProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";
import Browse from "../pages/Browse";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter"
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies";
import MovieInfo from "../pages/MovieInfo";

function App() {


  const [user, setUser] = useState(null);
  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

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
        <Route exact path="/search">
          <NavBar user={user} setUser={setUser} />
          <Search />
          <Footer />
        </Route>
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
          <Route path="/tv-shows">
              <NavBar user={user} setUser={setUser} />
              <TVShows user={user} />
              <Footer />
          </Route>
          <Route path="/movies">
              <NavBar user={user} setUser={setUser} />
              <Movies user={user} />
              <Footer />
          </Route>
            <Route path="/my-list">
              <NavBar user={user} onLogin={setUser} />
              <Footer />
          </Route>
          <Route exact path="/:id">
            <NavBar user={user} setUser={setUser} />
            <MovieInfo apiKey={apiKey} />
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
