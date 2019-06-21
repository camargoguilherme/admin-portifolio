import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Create from '../pages/Media/create';
import Edit from '../pages/Media/edit';
import Index from '../pages/Media/index';

class Media extends Component {
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

export default Media;