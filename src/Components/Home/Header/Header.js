import React from 'react';
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img1 from '../../../images/carosule/1.jpeg'
import Login from '../../shared/Login/Login';
import useAuth from '../../../../src/hooks/useAuth';

import './Header.css';

const Header = () => {
  // Google sign in using context api
  const { signInUsingGoogle, user, logOut } = useAuth();

  return (
    <div className="bg-img">
      <Navbar expand="lg" className="top-fixed">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">Best travelling site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/place#place" className="text-primary fw-bold">Place</Nav.Link>
              <Nav.Link as={HashLink} to="/order#order" className="text-primary fw-bold">MyOrders</Nav.Link>
              <Nav.Link as={HashLink} to="/booking#booking" className="text-primary fw-bold">Booking</Nav.Link>

              {
                user.displayName && <Nav.Link className="text-primary fw-bold">{user.displayName}</Nav.Link>
              }


              {
                user.email ? <button className="btn btn-info ms-2 text-primary fw-bold badge rounded-pill btn-style" onClick={logOut}>SingOut</button> :
                  <Link to="/Login">
                    <button className="btn btn-info text-light fw-bold badge rounded-pill btn-style">Login</button>
                  </Link>

              }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;