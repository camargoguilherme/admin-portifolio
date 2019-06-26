import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../services/auth';
import ItemMenu from '../ItemMenu';
import { path } from '../../const/path';

const menus = [

  {
    path: `${path}/admin/profile`,
    title: "Perfil"
  },
  {
    path: `${path}/admin/about`,
    title: "Sobre"
  },
  {
    path: `${path}/admin/portifolio`,
    title: "Portifolio"
  },
  {
    path: `${path}/admin/details`,
    title: "Detalhes"
  },
  {
    path: `${path}/admin/media`,
    title: "Redes Sociais"
  },
  {
    path: `${path}/admin/skill`,
    title: "Habilidades"
  },
  {
    path: `${path}/admin/blog`,
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
    window.location = path;
  }
  
  render() {
    return (
      // <!-- Navigation -->
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/admin-portifolio/admin'} className="navbar-brand">Painel Admin - Portifolio</Link>
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
