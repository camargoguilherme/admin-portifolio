import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../services/auth';
import ItemMenu from '../ItemMenu';

const menus = [

  {
    path: "/admin/profile",
    title: "Perfil"
  },
  {
    path: "/admin/about",
    title: "Sobre"
  },
  {
    path: "/admin/portifolio",
    title: "Portifolio"
  },
  {
    path: "/admin/details",
    title: "Detalhes"
  },
  {
    path: "/admin/media",
    title: "Redes Sociais"
  },
  {
    path: "/admin/skill",
    title: "Habilidades"
  },
  {
    path: "/admin/blog",
    title: "Blog"
  }
]

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      menus: [ ...menus ]
    }
  }

  logout = (e) => {
    e.preventDefault();
    logout();
    window.location = "/";
  }
  
  render() {
    return (
      // <!-- Navigation -->
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/admin'} className="navbar-brand">Painel Admin - Portifolio</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            this.state.menus.map( (item, index) =>{
              return <ItemMenu key={index} item={item}></ItemMenu>
            })
          }
        </ul>
        <button onClick={this.logout} className="btn btn-danger">Logout</button>
      </div>
    </nav> 
    );
  }
}

export default Header;
