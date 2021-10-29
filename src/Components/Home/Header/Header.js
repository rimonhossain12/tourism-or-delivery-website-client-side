import React from 'react';
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img1 from '../../../images/carosule/1.jpeg'
import img2 from '../../../images/carosule/2.jpeg'
import img3 from '../../../images/carosule/3.jpeg'
import './Header.css';

const Header = () => {
  return (
    <div className="bg-img">
      <Navbar expand="lg" className="top-fixed">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">Best travelling site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/about#about" className="text-primary fw-bold">About</Nav.Link>
              <Nav.Link as={HashLink} to="/booking#booking" className="text-primary fw-bold">Booking</Nav.Link>
              <Nav.Link as={HashLink} to="/blog#blog" className="text-primary fw-bold">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;