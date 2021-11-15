import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import './About.css';
import { FaHandHoldingUsd, FaBookOpen, FaPeopleArrows } from "react-icons/fa";
import Footer from '../Footer/Footer';
import img1 from '../../images/carosule/2.jpeg';


const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 mb-5">
                <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                    <Col>
                        <p className="fw-bold text-uppercase text-danger ">our tour gallery</p>
                        <h2 className="fw-bold text-start about-para-style">
                            OUR TOUR GALLERY
                            HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h2>
                    </Col>
                    <Col>
                        <p className="text-start fw-normal">50 Travel Quotes that will inspire you to pack your bags
                            09/19/2021 By Traveling Canucks 61 Comments
                            Categories: Featured Reflections Top Lists Travel Stories Travel Tips
                            Best Travel Quotes for Travel Inspiration
                            Sometimes a simple travel quote or phrase is all it takes to spark action or change in our lives.   We always welcome inspirational words, so we thought it would be fun to share some quotes that have inspired us in the past.</p>
                    </Col>
                </Row>
            </div>
            {/* React icon section */}

            <div className="container">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    <Col className="d-flex">
                        <div className="icon-bg">
                            <span className="icon-size">
                                <FaHandHoldingUsd />
                            </span>

                        </div>
                        <div className="text-start ms-1">
                            <p> Quis autem vel eum iure <br /> reprehenderit qui in ea voluptate velit</p>
                        </div>
                    </Col>
                    <Col className="d-flex">
                        <div className="icon-bg">
                            <span className="icon-size"> <FaBookOpen /></span>
                        </div>
                        <div className="text-start ms-1">
                            <p> Quis autem vel eum iure <br /> reprehenderit qui in ea voluptate velit</p>
                        </div>
                    </Col>
                    <Col className="d-flex">
                        <div className="icon-bg">
                            <span className="icon-size">
                                <FaPeopleArrows />
                            </span>

                        </div>
                        <div className="text-start ms-1">
                            <p> Quis autem vel eum iure <br /> reprehenderit qui in ea voluptate velit</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* our partner */}

            <div className="container mt-5">
                <div className="container ms-5 me-5">
                    <p className="text-danger fw-bold">OUR ASSOCAITES</p>
                    <h2 className="fs-1 text-dark fw-bold">PARTNER'S AND CLIENTS</h2>
                    <p className="text-dark mx-auto fst-normal lh-base">Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat <br />. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About;