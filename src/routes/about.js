import React, { Component } from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";

import Create from '../pages/About/create';
import Edit from '../pages/About/edit';
import Index from '../pages/About/index';

class About extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <BrowserRouter>
        <Route path={`${path}/create`} component={ Create } />
        <Route path={`${path}/edit/:id`} component={ Edit } />
        <Route exact path={`${path}`} component={ Index } />
      </BrowserRouter>
    );
  }
}

export default About;