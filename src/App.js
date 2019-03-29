import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>TV Show List</h1>
      </div>
    );
  }
}

export default App;
