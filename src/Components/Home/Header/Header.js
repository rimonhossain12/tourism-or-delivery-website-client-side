import React from 'react';
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import img1 from '../../../images/carosule/1.jpeg'
import img2 from '../../../images/carosule/2.jpeg'
import img3 from '../../../images/carosule/3.jpeg'
import Login from '../../Login/Login';
import './Header.css';

const Header = () => {
  const { signInUsingGoogle,user} = useAuth();
  return (
    <div className="bg-img">
      <Navbar expand="lg" className="top-fixed">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">Best travelling site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">Home</Nav.Link>
              {/* <Nav.Link as={HashLink} to="/about#about" className="text-primary fw-bold">About</Nav.Link> */}
              <Nav.Link as={HashLink} to="/place#place" className="text-primary fw-bold">Place</Nav.Link>
              <Nav.Link as={HashLink} to="/booking#booking" className="text-primary fw-bold">Booking</Nav.Link>
              <Nav.Link as={HashLink} to="/blog#blog" className="text-primary fw-bold">Blog</Nav.Link>
              <Link to={Login}>
                <button className="btn btn-info text-light fw-bold badge rounded-pill btn-style">Log In</button>
                </Link>
              <button className="btn btn-info ms-2 text-light fw-bold badge rounded-pill btn-style">SingOut</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;