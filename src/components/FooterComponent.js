import React from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    
                    <div className="col text-center">
                        <h5>Social</h5>
                        <a className="footerLink"href="http://linkedin.com/"><MDBIcon fab icon="linkedin" /></a>{' '}
                        <a className="footerLink"href="http://www.facebook.com/"><MDBIcon fab icon="facebook" /></a>{' '}
                        <a className="footerLink"href="http://twitter.com/"><MDBIcon fab icon="twitter" /></a>{' '}
                        <a className="footerLink"href="http://github.com/"><MDBIcon fab icon="github" /></a> 
                    </div>
                    <div className="col text-center">
                        <h5><MDBIcon fas icon="at" /></h5> <a role="button" className="footerLink" href="mailto:Bryank.Hayes@gmail.com">BryanK.Hayes@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;