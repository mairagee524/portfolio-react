import React, { Component } from 'react';

export default class Porfolio extends Component {
  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row section-intro">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works</h1>
        </div> 
        <div className="row portfolio-content">
        <div class="col-twelve">

          <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

            {resumeData.portfolio.map(item => {
              return(
                <div key={item.key}>
                  <div className=" bgrid folio-item">
                    <div className="item-wrap">
                      <img src={`${item.imgUrl}`} alt={`${item.alt}`}/>

                      <a href={`#${item.modal}`} className="overlay">
                        <div className="folio-item-table">
                          <div className="folio-item-cell">
                            <h3 className="folio-title">{item.name}</h3>	     					    
                            <span className="folio-types">
                              {item.type}
                            </span>
                            <br/>
                          </div>	                      	
                        </div>                    
                      </a>
                    </div>	               
                  </div>

                  <div id={item.modal} className="popup-modal slider mfp-hide">	
                    <div className="media">
                      <img src={`${item.imgUrl}`} alt={`${item.alt}`} />
                    </div>      	
                    <div className="description-box">
                      <h4>{item.name} </h4>		      
                      <p>{item.description}</p>
                      <div className="categories">{item.type}</div>          
                    </div>
                    <div className="link-box">
                      <a href={`${item.repoUrl}`} >Github</a>
                      <a href={`${item.liveUrl}`} >Live Preview</a>
                      <button className="popup-modal-dismiss">Close</button>
                    </div>		      
                  </div> 
                </div>
              )
            })};
          </div>
        </div>  
        </div>
{/* 
        <section class="work section" id="portfolio">
          <h2 class="section-title">My Portfolio</h2>
          <h4 class="portfolio-blurb">If on a desktop, feel free to hover over each image to learn what each application does and what technologies were used. If you are on a mobile device, feel free to click on the image itself for more information about each application. </h4>
          <div class="container bd-grid">
            <div class="work__img">
              <div class="img-hover">
                <img src="assets/img/soma-kitchen.png" alt=""/>
              </div>
              <div class="pic-info">
                <div class="content">
                  <h4>Soma Kitchen</h4>
                  <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                  <p><span class="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                  <a href="https://github.com/zcorpuz/soma_kitchen" class="footer__icon">
                    <i class='bx bxl-github bx-tada-hover bx-md'></i>
                  </a>
                  <a href="https://protected-everglades-09109.herokuapp.com/" class="footer__icon">
                    <i class='bx bx-link bx-tada-hover bx-md'></i>
                  </a>
                </div>
              </div>
            </div>            
          </div>
        </section> */}

        {/* <section id="portfolio">

          <div class="row section-intro">
            <div class="col-twelve">

              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>

              <p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>   		
          </div> 

          <div class="row portfolio-content">

            <div class="col-twelve">

              <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

                <div class="bgrid folio-item">
                  <div class="item-wrap">
                    <img src="images/portfolio/liberty.jpg" alt="Liberty"/>
                    <a href="#modal-01" class="overlay">
                      <div class="folio-item-table">
                        <div class="folio-item-cell">
                          <h3 class="folio-title">Liberty</h3>	     					    
                          <span class="folio-types">
                            Graphic Design
                          </span>
                        </div>	                      
                      </div>                    
                    </a>
                  </div>	 
                </div> 


                <div id="modal-01" class="popup-modal slider mfp-hide">	
                  <div class="media">
                    <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                  </div>      	

                  <div class="description-box">
                    <h4>Liberty</h4>		      
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <div class="categories">Web Development</div>			               
                  </div>
                  <div class="link-box">
                    <a href="http://www.behance.net">Details</a>
                      <a href="#" class="popup-modal-dismiss">Close</a>
                    </div>		      
                  </div>
                </div> 

            </div>
          </div> 
        </section> */}
      </section> 
    ) 
  }
}