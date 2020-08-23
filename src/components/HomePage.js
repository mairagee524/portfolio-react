import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Contact from "../pages/Contact";


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
        <Footer />
      </Router>
    );
  }
}

export default HomePage;