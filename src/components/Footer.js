import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  
  return (
    <Nav className="justify-content-center Footer">
      
      <Nav.Item>
        <Nav.Link className="Footer-copyright" href="/gcm-portfolio">&copy; 2020 Copyright Guillermo Martin.</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="https://github.com/Guillermo-Martin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github Footer-icon"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/guillermo-martin-10441046/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin Footer-icon"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="mailto:gscalica@gmail.com"><i className="far fa-envelope Footer-icon"></i></Nav.Link>
      </Nav.Item>
        
    </Nav>  
  );
}

export default Footer;




// import React, { Component } from 'react';

// class Footer extends Component {
//   render() {

//     if(this.props.data){
//       var networks= this.props.data.social.map(function(network){
//         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
//       })
//     }

//     return (
//       <footer>

//      <div className="row">
//         <div className="twelve columns">
//            <ul className="social-links">
//               {networks}
//            </ul>

//            <ul className="copyright">
//               <li>&copy; Copyright 2017 Tim Baker</li>
//               <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
//            </ul>

//         </div>
//         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
//      </div>
//   </footer>
//     );
//   }
// }

// export default Footer;
