import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TVShowPage from './components/TVShowPage/TVShowPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  changeRoute = (route) => {
    this.setState({ route: route });
  }

  renderElement() {
    if (this.state.route === 'login') {
      return <Login changeRoute = {this.changeRoute}/>
    }
    else if (this.state.route === 'signup') {
      return <Signup changeRoute = {this.changeRoute}/>
    }
    else if (this.state.route === 'home') {
      return <Home changeRoute = {this.changeRoute}/>
    }
    else {
      return <TVShowPage title={this.state.route}/>;
    }
  }

  render() {
    const { route } = this.state;

    return (
      <div className="App">
        <Navigation changeRoute = {this.changeRoute}/>
        { this.renderElement() }
      </div>
    );
  }
}

export default App;