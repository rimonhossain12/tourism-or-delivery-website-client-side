import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import './About.css';
import TouchCarousel from 'react-touch-carousel'
import { IoBookOutline, IoMan } from "react-icons/io5";
import img1 from '../../images/carosule/1.jpeg';
import img2 from '../../images/carosule/2.jpeg';
import img3 from '../../images/carosule/3.jpeg';
import img4 from '../../images/carosule/4.jpeg';
import Footer from '../Footer/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
            {/* React small carousel */}
        
           <Footer></Footer>
        </div>
    );
}

export default About;