import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import Header from "../components/Header";

import Login from "../pages/Login";

import About from '../routes/about';
import Blog from "../routes/blog";
import Details from "../routes/details";
import Media from "../routes/media";
import Portifolio from "../routes/portifolio";
import Profile from "../routes/profile";
import Skill from "../routes/skill";
const path = '/admin-portifolio/admin'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: `${path}`, state: { from: props.location } }} />
      )
    }
  />
);

const PrivateRoutes = () => {
  return (
  <BrowserRouter>
    <Header />
    <Route path={`${path}/about`} component={About} />
    <Route path={`${path}/blog`} component={Blog} />
    <Route path={`${path}/details`} component={Details} />
    <Route path={`${path}/media`} component={Media} />
    <Route path={`${path}/portifolio`} component={Portifolio} />
    <Route path={`${path}/profile`} component={Profile} />
    <Route path={`${path}/skill`} component={Skill} />
  </BrowserRouter>
  )
}

const PublicRoutes = () => {
  return (
  <BrowserRouter>
    <Route exat path="/" component={Login} />
  </BrowserRouter>
  )
}

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <PrivateRoute path={path} component={PrivateRoutes} />
            <PublicRoute path="/" component={PublicRoutes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;