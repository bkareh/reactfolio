import React from 'react';
import BHlogo from './img/logo1.png';

function Home() {
    return (
      <>
        <div className='HomeBody'>
          <img src={BHlogo} className="App-logo" alt="logo" />
          <p>
            Currently <code>UNDER CONSTRUCTION</code>, please stand by.
          </p>
          <a
            className="HomeBodyLink"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            What up, WORLD?
          </a>
        </div>
      </>
    );
  }
  
  export default Home;