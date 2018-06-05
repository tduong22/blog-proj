import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Image} from './images/logo.jpg'
import {HeaderNav} from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderNav></HeaderNav>
      </div>
    );
  }
}

export default App;
