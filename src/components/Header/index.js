import React, { Component } from 'react';
import ItemMenu from '../ItemMenu';
import api from '../../services/api';

class Header extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      // <!-- Navigation -->
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Admin Portifolio</a>
        </div>
      </nav>
    );
  }
}

export default Header;
