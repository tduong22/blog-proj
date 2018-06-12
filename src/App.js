import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Image} from './images/logo.jpg'
import {HeaderNav} from './components/header';
import {MainNav} from './components/main';
import {SideBarNav} from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
       <HeaderNav></HeaderNav>
       <MainNav></MainNav>
       <SideBarNav></SideBarNav>
      </div>
    );
  }
}

export default App;
