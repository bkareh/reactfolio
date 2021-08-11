import React, { Component } from 'react';
import BHlogo from './img/logo1.png';
import {
  MDBContainer as Container,
  MDBNavbar as Navbar,
  MDBNavbarBrand as NavbarBrand,
  MDBNavbarToggler as NavbarToggler,
  MDBIcon as Icon,
  MDBNavbarNav as Nav,
  MDBNavbarItem as NavItem,
  MDBBtn as Btn,
  MDBCollapse as Collapse,
  MDBModal as Modal,
  MDBModalHeader as ModalHeader,
  MDBModalBody as ModalBody,
  MDBInput as Input
} from 'mdb-react-ui-kit';

import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <>
            <Navbar fixed='top' expand='md' dark className="navBg">
            <Container fluid>
                <NavbarBrand className='mr-auto' href='#'><img src={BHlogo} width="50" height="50" alt="logo" /></NavbarBrand>

                <NavbarToggler
                onClick={this.toggleNav}
                >
                <Btn floating tag='a' className='navBtn'>
                <Icon icon='bars' fas />
                </Btn>
                </NavbarToggler>

                <Collapse navbar isOpen={this.state.isNavOpen}>
                <Nav navbar className='mr-auto mb-0'>
                    <NavItem>
                    <NavLink active to="/home">
                        Home
                    </NavLink>
                    </NavItem>
                    
                    <NavItem>
                    <NavLink to="/about">About</NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink to="/projects">Projects</NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink to="contact">Contact</NavLink>
                    </NavItem>

                    <NavItem>
                        <Btn outline rounded className='mx-2 btn1'>PUSH</Btn>
                        <Btn rounded className='mx-2 btn2' onClick={this.toggleModal}>PUSH</Btn>
                        
                    </NavItem>

                </Nav>
                </Collapse>
            </Container>
            </Navbar>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
            <form onSubmit={this.handleLogin}>
                <div>
                        <Input label="Username" htmlFor="username" type="text" id="username" name="username" innerRef={input => this.username = input} />
                </div>
                <div>
                        <Input label="Password" htmlFor="password" type="password" id="password" name="password" innerRef={input => this.password = input} />
                </div>
                
                <Btn type="submit" color="primary">Login</Btn>
            </form>
            </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;