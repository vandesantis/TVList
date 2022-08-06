import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TVShowPage from './components/TVShowPage/TVShowPage';
import UserProfile from './components/UserProfile/UserProfile';
import NewShowForm from './components/NewShowForm/NewShowForm';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
  const [route, setRoute] = useState('home');
  const [show, setShow] = useState({title: '', synopsis: '', rating: '', genre: '', fcc: ''});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({ id: '', username: '', email: '', joined: ''})

  const loadUser = (data) => {
    setUser(data);
    setIsSignedIn(!isSignedIn);
  }

  const changeRoute = (route) => {
    setRoute(route);
  }

  const openShowPage  = (show) => {
    setShow(show);
  }

  return (
    <Router>
      <div className="App">
        <Navigation changeRoute = {changeRoute} user = {user} loadUser={loadUser}/>
        <Switch>
          <Route exact path="/" ><Redirect to="/home" /></Route>
          <Route exact path="/home" render={(props) => <Home {...props} openShowPage = {openShowPage}/>}/>
          <Route exact path="/login" render={(props) => <Login {...props} loadUser={loadUser}/>}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/newShowForm" component={NewShowForm} />
          <Route exact path={"/show/" + show.title} render = {(props) => <TVShowPage
            // title={show.title}
            // genre={show.genre}
            // rating={show.rating}
            // synopsis={show.synopsis}
            // fcc={show.fcc}
            // user={user}/>}
            user={user}
            show={show}/>}
          />
          <Route exact path="/profile" render={(props) => <UserProfile openShowPage = {openShowPage}/>}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;