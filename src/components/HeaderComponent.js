import React, { useState } from 'react';
import BHlogo from './img/logo1.png';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='md' dark className="navBg">
      <MDBContainer fluid>
        <MDBNavbarBrand className='mr-auto' href='#'><img src={BHlogo} width="50" height="50" alt="logo" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
        <MDBBtn floating tag='a' className='navBtn'>
          <MDBIcon icon='bars' fas />
        </MDBBtn>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Projects</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBBtn outline rounded className='mx-2 btn1'>PUSH</MDBBtn>
                <MDBBtn rounded className='mx-2 btn2'>PUSH</MDBBtn>
                
            </MDBNavbarItem>

            

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;