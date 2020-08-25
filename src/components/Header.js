import React from 'react';
import HeroImage from './HeroImage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import HorizontalRule from './HorizontalRule';
import Credit from './Credit';


function HomePage() {
  return (
    <div>
      <HeroImage 
        name="Hi, I'm Guillermo."
        intro="I'm a front-end web developer based in the Bay Area."
        className="HeroImage-img"
      />
      <Credit 
        name="Tim Trad"
        link="https://unsplash.com/@timtrad"
      />
      <About />
      <HorizontalRule />
      <Portfolio />
      <HorizontalRule />
      <Contact />
    </div>
  );
}

export default HomePage;



// import React, { Component } from 'react';

// class Header extends Component {
//   render() {
//     if(this.props.data){
//       console.log(this.props.data);
//       var name = this.props.data.name;
//       // var occupation = this.props.data.occupation;
//       // var description = this.props.data.description;
//       // var city = this.props.data.address.city;
//       var networks = this.props.data.social.map(function(network){
//         return <li key={network.name}>
//           <a href={network.url}>
//             <i className={network.className}></i>
//           </a>
//         </li>
//       })
//     }

//     return (
//       <header id="home">

//       <nav id="nav-wrap">
//         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
// 	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
//         <ul id="nav" className="nav">
//           <li className="current">
//             <a className="smoothscroll" href="#home">Home</a>
//           </li>
//           <li>
//             <a className="smoothscroll" href="#about">About</a>
//           </li>
// 	        <li>
//             <a className="smoothscroll" href="#resume">Resume</a>
//           </li>
//           <li>
//             <a className="smoothscroll" href="#portfolio">Works</a>
//           </li>
//           <li>
//             <a className="smoothscroll" href="#testimonials">Testimonials</a>
//           </li>
//           <li>
//             <a className="smoothscroll" href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>

//       <div className="row banner">
//         <div className="banner-text">
//           <h5>Hello, World.</h5>
//           <h1 className="responsive-headline">I'm {name}.</h1>
//           {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
//  */}


//           <p className="intro-position">
// 	   				<span>Full-Stack Developer</span>
// 	   				<span>Bilingual</span> 
//             <span>Los Angeles Native</span> 

// 	   			</p>

// 	   			<a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
//           <hr />
//           <ul className="social">
//             {networks}
//           </ul>
//         </div>
//       </div>

//       <p className="scrolldown">
//         <a className="smoothscroll" href="#about">
//           <i className="icon-down-circle"></i>
//           </a>
//       </p>
//    </header>
//     );
//   }
// }

// export default Header;