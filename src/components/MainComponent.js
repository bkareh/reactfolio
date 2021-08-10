import React from 'react';
import BHlogo from './img/logo1.png';

function Main() {
    return (
      <>
          <img src={BHlogo} className="App-logo" alt="logo" />
          <p>
            Currently <code>UNDER CONSTRUCTION</code>, please stand by.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            What up, WORLD?
          </a>
      </>
    );
  }
  
  export default Main;