import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Create from '../pages/Portifolio/create';
import Edit from '../pages/Portifolio/edit';
import Index from '../pages/Portifolio/index';

class Portifolio extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <BrowserRouter>
        <Route exact path={`${path}/create`} component={ Create } />
        <Route exact path={`${path}/edit/:id`} component={ Edit } />
        <Route exact path={`${path}`} component={ Index } />
      </BrowserRouter>
    );
  }
}

export default Portifolio;