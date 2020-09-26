import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <section id="about">  

                <div className="row section-intro">
                   
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div className="intro-info">

                        <img src="images/profile-pic.jpg" alt="Profile of MG"/>

                        <p className="lead">A UCLA alum since 2017, I am currently taking the Full-Stack Web Development Coding Bootcamp at UCLA Extension. I will update this page as I gain more experience through internships and volunteering opportunities. So far, my journey is going well as I am exposed to different concepts every time, whether I learn JavaScript, Node, Express, or MongoDB. My long-term goal is to create a form of technology that would assist underserved communities.</p> 
                        <br/>
                        <p className="lead">In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>           
                </div>   		
            </div>

            <div className="row button-section">
                
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Contact Me</a>
                    <a href="https://drive.google.com/file/d/1g3npUVrn8G-EkdEDuQh84nN4Bw9_8ekr/view?usp=sharing" title="Download CV" className="button button-primary">Resume</a>
                </div>   		

            </section> 
        )
    }
}