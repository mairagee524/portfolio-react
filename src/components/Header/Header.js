import React from 'react';
import Button from '../Button';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';

export default function Album() {

  return (
    // <React.Fragment>
    //   <CssBaseline />
      
      <div className="main">
        {/* <Container maxWidth="sm"> */}

        <h1 className="main-header">Album Layout</h1>
        <p className="main-blurb">Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
        entirely.</p>

        <Button />
        
        {/* </Container>
        {props.children} */}
      </div>
    //  </React.Fragment>
  );
}