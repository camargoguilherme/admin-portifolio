import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class ItemMenu extends Component {
  constructor(props){
    super(props)
    this.state = { ...props.item}
  }
  render(){
    return (
      <Fragment>
        <li className="nav-item">
          <Link to={`${this.state.path}`} className="nav-link">{this.state.title}</Link>
        </li>
      </Fragment>
    );
  }
}

export default ItemMenu;