import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import About from '../routes/about';
import Blog from "../routes/blog";
import Details from "../routes/details";
import Media from "../routes/media";
import Portifolio from "../routes/portifolio";
import Profile from "../routes/profile";
import Skill from "../routes/skill";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/about' component={ About } />
            <Route exact path='/blog' component={ Blog } />
            <Route exact path='/details' component={ Details } />
            <Route exact path="/media" component={ Media } />
            <Route exact path="/portifolio" component={ Portifolio } />
            <Route exact path="/profile" component={ Profile } /> 
            <Route exact path='/skill' component={ Skill } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;