import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
            <p className="lead">The first two are from real-time clients and the rest are mini-projects</p>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio.map((item)=>{
                return(
                  <div key={item.key} className=" portfolio-item" style={{ width: "45%", display:"inline-block", margin: 15}}>
                    <div className="item-wrap">
                      <a target="_blank" rel="noopener noreferrer" href={`${item.url}`}>
                        <img src={`${item.imgurl}`} className="item-img" alt="" style={{height: 330, width: "100%"}}/>
                        
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}