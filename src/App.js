import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Weather/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="weather-app">
        <MainContainer />
      </div>
    )
  } 
}

export default App;
