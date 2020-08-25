import React from 'react';
import Card from 'react-bootstrap/Card';

function TextCard(props) {
  return (
    <div>
      <Card style={{ width: '30rem', margin: "0.5rem" }} className="TextCard">
        {/* Image */}
        <Card.Img 
          variant="top" 
          src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          className="TextCard-image"
        />

          {/* Content */}
          <div >
            <Card.Text className="ImageCard-text">
              {/* <Card.Title className="TextCard-title">Title</Card.Title> */}
              <p className="TextCard-text">
                <div className="TextCard-text-div">{props.text}</div>
              </p>
             
            </Card.Text>
          </div> 

          
      </Card>
    </div>
  );
}

export default TextCard;