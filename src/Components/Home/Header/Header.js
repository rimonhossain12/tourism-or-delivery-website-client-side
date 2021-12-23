import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../src/hooks/useAuth';

import './Header.css';

const Header = () => {
  // Google sign in using context api
  const { user, logOut } = useAuth();
  console.log(user.photoURL);

  return (
    <div className="bg-img">
      <Navbar expand="lg" className="top-fixed">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">Best travelling site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/showService#showService" className="text-primary fw-bold">service</Nav.Link>
              <Nav.Link as={HashLink} to="/about#about" className="text-primary fw-bold">AboutUs</Nav.Link>
              {
                user.email &&
                <>

                  <Nav.Link as={HashLink} to="/order#order" className="text-primary fw-bold">MyOrders</Nav.Link>
                  < NavDropdown title="DashBoard" id="basic-nav-dropdown" className="text-primary fw-bold w-50">
                    <NavDropdown.Item href="#action/3.1">
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Nav.Link as={HashLink} to="/order#order" className="text-primary fw-bold">Add A service</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Nav.Link as={HashLink} to="/mangeOrder#mangeOrder" className="text-primary fw-bold">Mange All Order</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  < NavDropdown title="Profile" id="basic-nav-dropdown" className="text-primary fw-bold w-50">
                    <NavDropdown.Item href="#action/3.1">
                      <img className="nav-img img-fluid" src={user.photoURL} alt="NTU Badge" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">{user.displayName}</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">{user.email}</NavDropdown.Item>
                  </NavDropdown>
                </>
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
    </div >
  );
};

export default Header;