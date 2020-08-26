import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            {/* <div className="three columns"> */}
                <h2>About Me</h2>
               <h4> Bilingual Latina Software Engineer and UCLA graduate </h4>

               <img className="profile-pic"  src="images/profile-pic.jpg" alt="" />

            {/* </div> */}

            {/* <div className="nine columns main-col"> */}

             
                <section className="about section" id="about">
                    <h2 className="section-title">Who am I?</h2>

                    <div className="about__container bd-grid">
                        <div className="about__img">
                            <img src="assets/img/profile-pic.jpg" alt=""/>
                        </div>
                        
                        <div>
                            <h2 className="about__subtitle">First-Generation College Graduate | Latina Engineer</h2>
                            <p className="about__text">A UCLA alum since 2017, I am currently taking the Full-Stack Web Development Coding Bootcamp at UCLA Extension. I will update this page as I gain more experience through internships and volunteering opportunities. So far, my journey is going well as I am exposed to different concepts every time, whether I learn JavaScript, Node, Express, or MongoDB. My long-term goal is to create a form of technology that would assist underserved communities.</p> 
                            <br/>
                            <p className="about__text">In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>           
                        </div>
                    </div>

                    <div className="row button-section">
                        <div className="col-twelve">
                            <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Contact Me</a>
                            <a href="#" title="Download CV" className="button button-primary">Resume</a>
                        </div>   		
                    </div>

                </section>







{/* 
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br> */}
       						   {/* <span>
                     {resumeData.address}
                    </span>
                    <br></br> */}


                    {/* <span>
                    <a target="_blank" rel="noopener noreferrer" href = {resumeData.website}>Portfolio</a>
                    </span>
                    <br></br><span>
                    <a target="_blank" rel="noopener noreferrer" href ="mailto:jonathan213kim@gmail.com">Jonathan213kim@gmail.com</a>

                    </span>
                    <br></br><span>
                    <a target="_blank" rel="noopener noreferrer" href ={resumeData.socialLinks[0].url}>LinkedIn</a>

                    </span>
                    <br></br><span>
                    <a target="_blank" rel="noopener noreferrer" href ={resumeData.socialLinks[1].url}>GitHub</a>

                    </span>

       					   </p>
                  </div>
               </div> */}
            {/* </div> */}
         </div>
      </section>
    );
  }
}