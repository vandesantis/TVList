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
      route: 'home',
      synopsis: '',
      rating: '',
      genre: '',
      fcc: ''
    }
  }

  changeRoute = (route) => {
    this.setState({ route: route });
  }

  openShowPage  = (route, genre, rating, synopsis, fcc) => {
    this.setState({ route: route, synopsis: synopsis, rating: rating, genre: genre, fcc: fcc});
  }

  renderElement() {
    const { route, synopsis, rating, genre, fcc } = this.state;

    if (route === 'login') {
      return <Login changeRoute = {this.changeRoute}/>
    }
    else if (route === 'signup') {
      return <Signup changeRoute = {this.changeRoute}/>
    }
    else if (route === 'home') {
      return <Home openShowPage = {this.openShowPage}/>
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
    // const { route } = this.state;

    return (
      <div className="App">
        <Navigation changeRoute = {this.changeRoute}/>
        { this.renderElement() }
      </div>
    );
  }
}

export default App;