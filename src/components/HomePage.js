import React, { Component } from "react";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Contact from "./Contact";


import { BrowserRouter as Router, Route } from "react-router-dom";

class HomePage extends Component {
  state = {
    currentPage: "Home"
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default HomePage;