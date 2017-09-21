import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search className="search" getInput="input"></Search>
        <User className="user" user=""></User>
      </div>
    );
  }
}

export default App;
