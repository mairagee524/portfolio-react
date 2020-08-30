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
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
            <p className="lead">The first two are from real-time clients and the rest are mini-projects.</p>
          </div>   		
        </div> 
        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">

              {resumeData.portfolio.map(item => {
                return(
                  <div key={item.key}>
                    <div className="bgrid folio-item">
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
      </section> 
    ) 
  }
}




// <div class="bgrid folio-item">
// <div class="item-wrap">
//   <img src="images/portfolio/salad.jpg" alt="Salad">
//   <a href="#modal-06" class="overlay">
//     <div class="folio-item-table">
//       <div class="folio-item-cell">
//         <h3 class="folio-title">Salad</h3>	     					    
//         <span class="folio-types">
//           Branding
//         </span>		     	
//       </div>	
//     </div>                    
//   </a>
// </div>
// </div> <!-- /folio-item -->   

// <!-- modal popups - begin
// ============================================================= -->
// <div id="modal-01" class="popup-modal slider mfp-hide">	

// <div class="media">
//   <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
// </div>      	

// <div class="description-box">
//   <h4>Liberty</h4>		      
//   <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

//   <div class="categories">Web Development</div>			               
// </div>

// <div class="link-box">
// <a href="http://www.behance.net">Details</a>
//   <a href="#" class="popup-modal-dismiss">Close</a>
// </div>		      

// </div> <!-- /modal-01 -->