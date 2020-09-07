import React, { Component } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <AboutMe resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />        
        <Testimonials resumeData={resumeData}/>
        <Stats resumeData={resumeData} />        
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
