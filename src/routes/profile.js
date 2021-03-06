import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Create from '../pages/Profile/create';
import Edit from '../pages/Profile/edit';
import Index from '../pages/Profile/index';

class Profile extends Component {
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

export default Profile;