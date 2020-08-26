import React from "react";
import layers from "../../public/img/layers.png";
import cogwheel from "../../public/img/cogwheel.png";
import pen from "../../public/img/pen.png";
import browser from "../../public/img/browser.png";
import myImage from "../../public/img/myImage.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={layers} alt=""/>
						<h4>Responsive</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={pen} alt=""/>
						<h4>Design</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={cogwheel} alt=""/>
						<h4>Performance</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={browser} alt=""/>
						<h4>Agile</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							I love to transform ideas into reality using code. I
							am passionate about using Javascript and animations
							to create awesome user experiences.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								VanillaJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};















// import React, { Component } from 'react';

// class About extends Component {
//   render() {

//     if(this.props.data){
//       var name = this.props.data.name;
//       var profilepic= "images/"+this.props.data.image;
//       var bio = this.props.data.bio;
//       var street = this.props.data.address.street;
//       var city = this.props.data.address.city;
//       var state = this.props.data.address.state;
//       var zip = this.props.data.address.zip;
//       var phone= this.props.data.phone;
//       var email = this.props.data.email;
//       var resumeDownload = this.props.data.resumedownload;
//     }

//     return (
//       <section id="about">
//       <div className="row">
//          <div className="three columns">
//             <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
//          </div>
//          <div className="nine columns main-col">
//             <h2>About Me</h2>

//             <p>{bio}</p>
//             <div className="row">
//                <div className="columns contact-details">
//                   <h2>Contact Details</h2>
//                   <p className="address">
// 						   <span>{name}</span><br />
// 						   <span>{street}<br />
// 						         {city} {state}, {zip}
//                    </span><br />
// 						   <span>{phone}</span><br />
//                      <span>{email}</span>
// 					   </p>
//                </div>
//                <div className="columns download">
//                   <p>
//                      <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
//                   </p>
//                </div>
//             </div>
//          </div>
//       </div>

//    </section>
//     );
//   }
// }

// export default About;