import React, { Component } from 'react';
import './App.css';
import Search from './Search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Find HTTP status codes</h2> 
          <a href="http://racksburg.com/choosing-an-http-status-code/"> reference </a>
          <br />    
          <a href="twitter.com/omidfi">say hi</a>
      <br />    
          <a href="https://glitch.com/edit/#!/knowing-organ">edit this page </a>
      
        </div>
      <Search />
      </div>
    );
  }
}

export default App;
