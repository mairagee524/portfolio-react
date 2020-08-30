import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="# " title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h3 className="hello-world" id="hello-world">Hello, World.</h3>
              <h1 className="responsive-headline">I'm {resumeData.name}</h1>
              <h3 style={{ color: "#fff", fontSize: "1.7rem", lineHeight: "2.4rem", letterSpacing: ".2rem", textShadow: "0 0 6px rgba(0, 0, 0, 0.2)" }}>
                |  {resumeData.roleOne}  |  {resumeData.roleTwo}  |
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <i className={item.className} />
                        
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#portfolio">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
