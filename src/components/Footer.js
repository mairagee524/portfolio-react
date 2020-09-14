import React, { Component } from 'react';

export default class Footer extends Component {
    
    render() {
        let resumeData = this.props.resumeData;

        return (
        <footer>
            <div className="row">
                <div className="col-full">
                    <ul className="footer-social">
                        {resumeData.socialLinks.map((item) => {
                        return (
                            <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <i className={item.className} />
                                    
                                </a>
                            </li>
                        );
                        })}
                            
                    </ul>

                    <ul className="footer-social">
                        <li><a href="#0">
                            <i className="im im-twitter" aria-hidden="true"></i>
                            <span>Home</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-instagram" aria-hidden="true"></i>
                            <span>About</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-behance" aria-hidden="true"></i>
                            <span>Portfolio</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-behance" aria-hidden="true"></i>
                            <span>Testimonials</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-behance" aria-hidden="true"></i>
                            <span>Contact</span>
                        </a></li>
                    </ul>
                </div>
            </div>

            <div className="row footer-bottom">

                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Hola 2017 || Ceevee 2014</span> 
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