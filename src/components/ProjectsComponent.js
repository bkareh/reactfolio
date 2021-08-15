import React from 'react';
import { Link } from 'react-router-dom';
import BHlogo from './img/logo1.png';

function Projects(props) {
    return (
        <>
        <div className='ProjectsDiv'><h2>PROJECTS</h2></div>
        <div className='ProjectsBody'>
          <img src={BHlogo} className="App-logo" alt="logo" />
          <p>
            Currently <code>UNDER CONSTRUCTION</code>, please stand by.
          </p>
          <a
            className="ProjectsBodyLink"
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

export default Projects;