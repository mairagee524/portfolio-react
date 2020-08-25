import React from "react";
import Background from "./background.jsx";
import About from "./about.jsx";
//import Test from "./test.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";

import WOW from "wowjs";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		new WOW.WOW().init();
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Back to Space
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a
									onClick={() => {
										this.scrolling(this.about);
									}}
									className="btn-style nav-item nav-link">
									About
								</a>
								<a
									onClick={() => {
										this.scrolling(this.projects);
									}}
									className="btn-style nav-item nav-link">
									Projects
								</a>
								<a
									onClick={() => {
										this.scrolling(this.contact);
									}}
									className="btn-style nav-item nav-link">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>

				<About
					ref={this.about}
					id="about-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
				<Projects
					ref={this.projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
				/>
				<Contact
					ref={this.contact}
					id="my-contact"
					fadeInLeft={"wow fadeInLeft"}
					shake={"wow pulse"}
				/>
			</div>
		);
	}
}

export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       MG
//     </Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>


//     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//         <li className="nav-item">
//           <Link
//             to="/"
//             className={
//               window.location.pathname === "/" || window.location.pathname === "/home"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/portfolio"
//             className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
//           >
//             Portfolio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/contact"
//             className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   );
// }

// export default NavBar;