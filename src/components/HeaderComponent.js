import React, { useState } from 'react';
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
    MDBModalTitle as ModalTitle,
    MDBModalFooter as ModalFooter,
    MDBModalBody as ModalBody,
    MDBInput as Input,
    MDBModalDialog as ModalDialog,
    MDBModalContent as ModalContent
} from 'mdb-react-ui-kit';

import { NavLink } from 'react-router-dom';

function Header() {

    const [showDD, setShowDD] = useState(false);
    const [ showModal, setShowModal] =useState(false);
    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            <Navbar fixed='top' expand='md' dark className="navBg">
                <Container fluid>
                    <NavbarBrand className='mr-auto' href='#'><img src={BHlogo} width="50" height="50" alt="logo" /></NavbarBrand>

                    <NavbarToggler
                        onClick={() => setShowDD(!showDD)}
                    >
                        <Btn floating tag='a' className='navBtn'>
                            <Icon icon='bars' fas />
                        </Btn>
                    </NavbarToggler>

                    <Collapse navbar show={showDD}>
                        <Nav navbar className='mr-auto mb-0'>
                            <NavItem>
                                <NavLink className="nav-link" active to="/home">

                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </NavItem>

                            <NavItem>
                                <Btn outline rounded className='mx-2 btn1'>PUSH</Btn>
                                <Btn rounded className='mx-2 btn2' onClick={toggleModal}>PUSH</Btn>

                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal}>
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>Login</ModalTitle>
                            <Btn className='btn-close' color='none' onClick={toggleModal}></Btn>
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <div>
                                    <Input label="Username" htmlFor="username" type="text" id="username" name="username" innerRef={input => this.username = input} />
                                </div>
                                <div>
                                    <Input label="Password" htmlFor="password" type="password" id="password" name="password" innerRef={input => this.password = input} />
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Btn  color='danger' onClick={toggleModal}>Close</Btn>
                            <Btn type="submit" color="primary" onClick={toggleModal}>Login</Btn>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </Modal>
        </>
    );

}

export default Header;