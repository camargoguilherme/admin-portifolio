import React, { Component, Fragment } from 'react';

class ItemMenu extends Component {
  constructor(props){
    super(props)
    this.state = { ...props.itemMenu}
  }
  render(){
    return (
      <Fragment>
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href={`${this.state.link}`}>{this.state.title}</a>
        </li>
      </Fragment>
    );
  }
}

export default ItemMenu;