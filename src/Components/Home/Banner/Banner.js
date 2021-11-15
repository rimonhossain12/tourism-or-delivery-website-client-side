import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import banner from '../../../images/banner/banne.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src={banner}
                        width="90"
                        height="50"
                        className="d-inline-block align-top" id="banner-style"
                    />{' '} <span className="text-info fw-bold mt-1 ms-2">World Best Visit place</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home#home" className="text-info fw-bold">Home</Nav.Link>
                            <Nav.Link href="/home#home" className="text-primary fw-bold">Home</Nav.Link>
                            <Nav.Link href="/about#about" className="text-primary fw-bold">About</Nav.Link>
                            <Nav.Link href="/service#service" className="text-primary fw-bold">Service</Nav.Link>     
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;