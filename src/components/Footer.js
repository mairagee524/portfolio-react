import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
        <footer>
            <div className="row">
                <div className="col-full">
                    <h3>Let's connect!</h3>

                    <ul className="footer-social">
                        
                        <li><a href="#0">
                            <i className="im im-twitter" aria-hidden="true"></i>
                            <span>Twitter</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-instagram" aria-hidden="true"></i>
                            <span>Github</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-behance" aria-hidden="true"></i>
                            <span>LinkedIn</span>
                        </a></li>
                        
                    </ul>
                        
                </div>
            </div>

            <div className="row footer-bottom">

                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Hola 2017</span> 
                        <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
                    </div>

                    <div className="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>

            </footer>
        );
    }
}