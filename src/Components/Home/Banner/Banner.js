import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import banner from '../../../images/banner/banne.jpg';
import './Banner.css';

const Banner = () => {
    return (        
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">

                        <img id="img-style"
                            alt=""
                            src={banner}
                            width="80"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="text-info fw-bold ms-2 mt-1"> Best visiting park</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-info fw-bold">Home</Nav.Link>
                            <Nav.Link href="#about" className="text-info fw-bold">About</Nav.Link>
                            <Nav.Link href="#booking" className="text-info fw-bold">Booking</Nav.Link>

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;