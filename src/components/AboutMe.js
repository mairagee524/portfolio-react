import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
        <section id="about">  

            <div class="row section-intro">
                <div class="col-twelve">

                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div class="intro-info">

                        <img src="images/profile-pic.jpg" alt="Profile Picture"/>

                        <p className="lead">A UCLA alum since 2017, I am currently taking the Full-Stack Web Development Coding Bootcamp at UCLA Extension. I will update this page as I gain more experience through internships and volunteering opportunities. So far, my journey is going well as I am exposed to different concepts every time, whether I learn JavaScript, Node, Express, or MongoDB. My long-term goal is to create a form of technology that would assist underserved communities.</p> 
                        <br/>
                        <p className="lead">In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>           
                     </div>
                </div>   		
            </div>

            <div class="row button-section">
                <div class="col-twelve">
                    <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Contact Me</a>
                    <a href="#" title="Download CV" class="button button-primary">Resume</a>
                </div>   		
            </div>

        </section> 




 //   <section id="about">
    //      <div className="row">

    //         {/* <div className="three columns"> */}
    //             <h2>About Me</h2>

    //             <img className="profile-pic"  src="images/profile-pic.jpg" alt="" />
             
    //             <section className="about section" id="about">

    //                 <div className="about__container bd-grid">
    //                     {/* <div className="about__img">
    //                         <img src="assets/img/profile-pic.jpg" alt=""/>
    //                     </div> */}
                        
    //                     <div>
    //                         {/* <h2 className="about__subtitle">Bilingual Latina Software Engineer and UCLA graduate</h2> */}
    //                         <p className="about__text">A UCLA alum since 2017, I am currently taking the Full-Stack Web Development Coding Bootcamp at UCLA Extension. I will update this page as I gain more experience through internships and volunteering opportunities. So far, my journey is going well as I am exposed to different concepts every time, whether I learn JavaScript, Node, Express, or MongoDB. My long-term goal is to create a form of technology that would assist underserved communities.</p> 
    //                         <br/>
    //                         <p className="about__text">In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>           
    //                     </div>
    //                 </div>

    //                 <div className="row button-section">
    //                     <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Contact Me</a>
    //                     <a href="http://www.google.com" title="Download Resume" className="button button-primary">Resume</a>
    //                 </div>

    //             </section>
    //      </div>
    //   </section>






    );
  }
}