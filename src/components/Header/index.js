import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ItemMenu from '../ItemMenu';

const menus = [

  {
    path: '/profile',
    title: 'Perfil'
  },
  {
    path: '/about',
    title: 'Sobre'
  },
  {
    path: '/portifolio',
    title: 'Portifolio'
  },
  {
    path: '/details',
    title: 'Detalhes'
  },
  {
    path: '/media',
    title: 'Redes Sociais'
  },
  {
    path: '/skill',
    title: 'Habilidades'
  },
  {
    path: '/blog',
    title: 'Blog'
  }
]

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      menus: [ ...menus ]
    }
  }
  
  render() {
    return (
      // <!-- Navigation -->
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className="navbar-brand">Painel Admin - Portifolio</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            this.state.menus.map( (item, index) =>{
              return <ItemMenu key={index} item={item}></ItemMenu>
            })
          }
        </ul>
      </div>
    </nav> 
    );
  }
}

export default Header;
