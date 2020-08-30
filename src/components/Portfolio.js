import React, { Component } from 'react';

export default class Porfolio extends Component {
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
                <div key={item.key} className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={`${item.imgUrl}`} alt=""/>
                    <a href={`#${item.modal}`} className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">{item.name}</h3>	     					    
                          <span className="folio-types">
                            {item.type}
                          </span>
                        </div>	                      	
                      </div>                    
                    </a>
                  </div>	               
                </div>	                  	           
                
                
              );
            })};




{resumeData.portfolio.map(item => {
              return(

<div key={item.key} id={`${item.modal}`} className="popup-modal slider mfp-hide">	

<div className="media">
  <img src={`${item.imgUrl}`} />
</div>      	

<div className="description-box">
  <h4>{item.name}</h4>		      
  <p>{item.description}</p>

  <div className="categories">{item.type}</div>			               
</div>

<div className="link-box">
  <a href={`${item.repoUrl}`} >Github</a>
  <a href={`${item.liveUrl}`} >Live Preview</a>
  <a href="#" className="popup-modal-dismiss">Close</a>
</div>		      
</div> 
   );
  })};


</div>
          </div> 
        </div>  
      </section> 
    ) 
  }
}