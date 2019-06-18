import React, { Component } from "react";
import { Switch, Route, } from "react-router-dom";

import Create from '../pages/Details/create';
import Edit from '../pages/Details/edit';
import Index from '../pages/Details/index';

class Details extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <Switch>
          <Route path={`${path}/create`} component={ Create } />
          <Route path={`${path}/edit/:id`} component={ Edit } />
          {/* <Route exact path={`${path}`} component={ Index } /> */}
      </Switch>
    );
  }
}

export default Details;