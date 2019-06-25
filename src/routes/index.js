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
        <Redirect to={{ pathname: "/admin", state: { from: props.location } }} />
      )
    }
  />
);

const PrivateRoutes = () => {
  return (
  <BrowserRouter>
    <Header />
    <Route path="/admin/about" component={About} />
    <Route path="/admin/blog" component={Blog} />
    <Route path="/admin/details" component={Details} />
    <Route path="/admin/media" component={Media} />
    <Route path="/admin/portifolio" component={Portifolio} />
    <Route path="/admin/profile" component={Profile} />
    <Route path="/admin/skill" component={Skill} />
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
            <PrivateRoute path="/admin" component={PrivateRoutes} />
            <PublicRoute path="/" component={PublicRoutes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;