import React, { Component } from 'react';
import TopMenu from './topmenu';
import PropTypes from 'prop-types';
export class HeaderNav extends Component {

  constructor(props)
   {
      super(props);
   }
  render() {
        return (
            <header id="header">
            <h1><a href="#">{this.props.websiteName}</a></h1>
            <nav className="links">
              <ul>
               {this.props.menuList.map(menu=>{
                return  <li><a href={"#" + menu.name}>{menu.name}</a></li>
               })}
              </ul>
            </nav>            
            <TopMenu/>
          </header>
        );
    }
   static propTypes = {
      websiteName: PropTypes.string.isRequired,
      menuList: PropTypes.array.isRequired,
   };

   static defaultProps = {
    websiteName: "Red Scarf",
    menuList: [{name: 'Marketings'},{name: 'SEO'},{name: 'Stories'},{name: 'Others'},{name: 'About'}]
   };
}


