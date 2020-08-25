import React from 'react';
import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  // save props.link to variable to use for conditional rendering
  let link = props.link;

  return (
    <div className="ImageCard-container">
      <Card style={{ width: '30rem', margin: "0.5rem" }}>
        {/* Image */}
        <Card.Img 
          variant="top" 
          // src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          src={props.src}
          className="ImageCard-img"
        />

          {/* Content */}
          <div className="ImageCard-overlay">
            <Card.Text className="ImageCard-text">
              <Card.Title className="ImageCard-title">{props.title}</Card.Title>
              <p>{props.description}</p>
              <div>
                <small className="ImageCard-tech">Made using: {props.tech}</small>
              </div>
              <div>

                {/* if link is false, (i.e. no link available) render github icon only; else render both icons */}
                {!link 
                  ? <div>
                      <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github ImageCard-icon"></i></a> 
                    </div>
                
                  : <div>
                      <a href={props.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-link ImageCard-icon"></i></a>
                      <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github ImageCard-icon"></i></a> 
                    </div>
                }
                 
              </div>
            </Card.Text>
          </div> 
      </Card>
      
    </div>
  );
}

export default ImageCard;