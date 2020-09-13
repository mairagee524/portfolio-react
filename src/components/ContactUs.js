import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (



      <section id="contact">

        <div className="row section-intro">
          <div className="col-twelve">

            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>

            <p className="lead">If you are interested in working together or if you have any questions about my work, feel free to email me below.</p>

          </div> 
        </div> 
        <div className="row button-section">
            <a href="mailto:mairagarcia.codes@gmail.com" title="Contact Me" className="button stroke">Contact Me</a>
        </div>
      </section> 
    );
  }
}


