import React from 'react';
import BHlogo from './img/logo1.png';

function About() {
    return (
      <>
        <div className='AboutDiv'><h2>ABOUT</h2></div>
        <div className='AboutBody'>
          <img src={BHlogo} className="App-logo" alt="logo" />
          <p>
            Currently <code>UNDER CONSTRUCTION</code>, please stand by.
          </p>
          <a
            className="AboutBodyLink"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Here's a link, though.
          </a>
        </div>
      </>
    );
  }
  
  export default About;