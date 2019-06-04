import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Details from "../pages/Details";
import Media from "../pages/Media";
import Portifolio from "../pages/Portifolio";
import Profile from "../pages/Profile";
import Skill from "../pages/Skill";
import Header from "../components/Header";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/portifolio" component={Portifolio} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/skill" component={Skill} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;