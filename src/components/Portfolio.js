  
import React from 'react';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import blogSite from './../../public/img/portfolio/smirkspace.jpg'
function Portfolio() {
  return (
    <div className="Portfolio-container" id="portfolio">

      {/* Header and text */}
      <h2 className="Portfolio-h1">Portfolio.</h2>
      <p>
        Here's a selection of work I've done.
      </p>
      <Container fluid>

        {/* Project cards */}
        <Row className="Portfolio-row">
        <ImageCard
            src={blogSite} 
            title="Password Generator"
            description="A web application that uses prompts to generate a random password."
            tech="Made using: HTML, CSS, JavaScript, and GitHub Pages."
            link="https://guillermo-martin.github.io/passwordGenerator/"
            github="https://github.com/Guillermo-Martin/passwordGenerator"
          />
          <ImageCard
            src={blogSite} 
            title="Weather Dashboard"
            description="A web application that provides the current weather and a 5-day forecast for a city."
            tech="HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API, Moment.js, and GitHub Pages."
            link="https://guillermo-martin.github.io/weatherDashboard/"
            github="https://github.com/Guillermo-Martin/weatherDashboard"
          />
          <ImageCard
            src={blogSite} 
            title="Blog Site"
            description="A web application for posting thoughts, learning new recipes, and facts about Pokemon."
            tech="HTML, CSS, JavaScript, React, Bootstrap, TravisCI, ESLint, Express, mySQL2, Node.js, and Heroku."
            link="https://project02blog.herokuapp.com/"
            github="https://github.com/Kerry-Jr/Project02"
        />
        </Row>
        
        {/* Link to see more */}
        {/* <Link to='/portfolio'><span className="Portfolio-link">See More.</span></Link> */}
        <Link to='/gcm-portfolio/portfolio'><Button variant="dark" className="Portfolio-button">See More.</Button></Link>
      </Container>
      
    </div>
  );
}

export default Portfolio;


// import React, { Component } from 'react';

// class Portfolio extends Component {
//   render() {

//     if(this.props.data){
//       var projects = this.props.data.projects.map(function(projects){
//         var projectImage = 'img/portfolio/'+projects.image;
//         return <div key={projects.title} className="columns portfolio-item">
//            <div className="item-wrap">
//             <a href={projects.url} title={projects.title}>
//                <img alt={projects.title} src={projectImage} />
//                <div className="overlay">
//                   <div className="portfolio-item-meta">
//                  <h5>{projects.title}</h5>
//                      <p>{projects.category}</p>
//                   </div>
//                 </div>
//               <div className="link-icon"><i className="fa fa-link"></i></div>
//             </a>
//           </div>
//         </div>
//       })
//     }

//     return (
//       <section id="portfolio">

//       <div className="row">

//          <div className="twelve columns collapsed">

//             <h1>Check Out Some of My Works.</h1>

//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//                 {projects}
//             </div>
//           </div>
//       </div>
//    </section>
//     );
//   }
// }

// export default Portfolio;