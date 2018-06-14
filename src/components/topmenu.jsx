import React, { Component } from 'react';

export default class TopMenu extends Component {

  constructor(props)
   {
      super(props);
   }
  render() {
        return (
            <nav className="main">
              <ul>
                <li className="search">
                  <a className="fa-search" href="#search">Search</a>
                  <form id="search" method="get" action="#">
                    <input type="text" name="query" placeholder="Search" />
                  </form>
                </li>
                <li className="menu">
                  <a className="fa-bars" href="#menu">Menu</a>
                </li>
              </ul>
            </nav>
        );
    }
}

