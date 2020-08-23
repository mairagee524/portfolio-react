import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default PortfolioContainer;