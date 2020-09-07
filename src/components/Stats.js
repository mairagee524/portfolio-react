import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or collaborations below
            </p>
          </div>
        </div>
        <div className="row button-section">
            <a href="mailto:mairagarcia.codes@gmail.com" title="Contact Me" className="button stroke">Contact Me</a>
        </div>
      </section>
    );
  }
}
