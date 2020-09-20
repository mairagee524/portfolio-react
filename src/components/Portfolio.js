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
        <div className="row">
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
      </section> 
    ) 
  }
}