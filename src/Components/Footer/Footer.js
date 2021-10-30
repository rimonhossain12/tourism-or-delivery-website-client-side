import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { BsFacebook, BsWhatsapp, BsTelephone, BsMessenger } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-style mt-5">
            <div className="container">
                <Row xs={1} md={2} lg={4} className="g-4">

                    <Col>
                        <h4 className="text-warning">Contact Us</h4>
                        <ul className="icon-style text-start">
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><BsWhatsapp /></a>
                            <a href="#"><BsTelephone /></a>
                            <a href="#"><BsMessenger /></a>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="text-warning text-start">24 hour maintain team</h4>
                        <ul className="list-style text-start">
                            <li>Rohit <span>(CEO)</span></li>
                            <li>Riya <span>(CTO)</span></li>
                            <li>Hasib<span>(Team maintain)</span></li>
                            <li>Amil <span>(travelling bus maintainer)</span></li>
                            <li>Jalal uddin<span>(Creative Manager)</span></li>
                            <li>Sifat <span>(booking manager)</span></li>
                        </ul>
                    </Col>
                    <Col className="list-style">
                        <h4 className="text-warning text-start">Our Best Service Place</h4>
                        <ul className="list-style text-start">
                            <li>Cox’s Bazar</li>
                            <li>The Sundarbans</li>
                            <li>Dhaka</li>
                            <li>Srimangal</li>
                            <li> Chittagong</li>
                            <li>Rangamati</li>
                            <li>Bandarban</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="text-warning text-start">travel Bus service Name</h4>
                        <ul className="list-style text-start">
                            <li>Royal Express</li>
                            <li>Green Line</li>
                            <li>Hanif Enterprise</li>
                            <li>London Express</li>
                            <li>Shohag Elite</li>
                            <li>Shymoli Paribahan</li>
                            <li>Green Line</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;