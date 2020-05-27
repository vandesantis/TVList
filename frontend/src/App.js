import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TVShowPage from './components/TVShowPage/TVShowPage';
import UserProfile from './components/UserProfile/UserProfile';
import NewShowForm from './components/NewShowForm/NewShowForm';
//import SearchBox from './components/SearchBox/SearchBox';
// import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Starting state of the App
const initialState = {
  route: 'home',
  searchfield: '',
  title: '',
  synopsis: '',
  rating: '',
  genre: '',
  fcc: '',
  isSignedIn: false,
  user: {
    id: '',
    username: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.username,
      email: data.email,
      joined: data.joined
    }})
  }

  changeRoute = (route) => {
    this.setState({ route: route });
  }

  openShowPage  = (route, title, genre, rating, synopsis, fcc) => {
    this.setState({ route: route, title: title, synopsis: synopsis, rating: rating, genre: genre, fcc: fcc});
  }

  openUserProfile  = (route, genre, rating, synopsis, fcc) => {
    this.setState({ route: route, synopsis: synopsis, rating: rating, genre: genre, fcc: fcc});
  }

  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  renderElement() {
    const { route, synopsis, rating, genre, fcc, searchfield } = this.state;

    // the route will decide which components show up on the page
    if (route === 'login') {
      return <Login changeRoute = {this.changeRoute}/>
    }
    else if (route === 'signup') {
      return <Signup loadUser = {this.loadUser} changeRoute = {this.changeRoute}/>
    }
    else if (route === 'home') {
      return (
        <div>
         {/* <SearchBox search={this.onSearch}/> */}
          <Home searchfield = {searchfield} openShowPage = {this.openShowPage} changeRoute = {this.changeRoute}/>
        </div>
      );
    }
    else if (route === 'user') {
      return <UserProfile openShowPage = {this.openShowPage}/>
    }
    else if (route === 'newShowForm') {
      return <NewShowForm changeRoute = {this.changeRoute}/>
    }
    else {
      return <TVShowPage 
        title={route}
        genre={genre}
        rating={rating}
        synopsis={synopsis}
        fcc={fcc}
        />;
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation changeRoute = {this.changeRoute}/>
          {/* { this.renderElement() } */}
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} openShowPage = {this.openShowPage}/>}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/newShowForm" component={NewShowForm} />
            <Route path={"/show/" + this.state.title} render = {(props) => <TVShowPage
              title={this.state.title}
              genre={this.state.genre}
              rating={this.state.rating}
              synopsis={this.state.synopsis}
              fcc={this.state.fcc}/>}
            />
            <Route path="/profile" render={(props) => <UserProfile openShowPage = {this.openShowPage}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;