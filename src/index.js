import React from 'react';
import ReactDOM from 'react-dom';








//adding my imports
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
    </React.Fragment>, document.getElementById('root'));
    
// import App from './App';

// ReactDOM.render(
//     <App />, document.getElementById('root')
// );
