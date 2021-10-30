import React from 'react';
import { Col, Row } from 'react-bootstrap';
import clien1 from '../../../images/clients/1.jpg';
import clien2 from '../../../images/clients/2.jpg';
import clien3 from '../../../images/clients/3.jpg';
import clien4 from '../../../images/clients/4.jpg';
import clien5 from '../../../images/clients/5.jpg';
import clien7 from '../../../images/clients/7.jpg';

import './Clients.css';
import { AiFillStar } from "react-icons/ai";

const Clients = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h2 className="text-info ">Our clients says</h2>
                <hr className="w-25 mx-auto mb-4"/>
                <Row xs={1} md={2} lg={3} className="g-4">

                    <Col className="cart-style">
                        <img className="cli-img" src={clien1} alt="" />
                        <h5 className="mt-2 text-primary">Mrs. Jessica</h5>
                        <p className="text-normal text-start">Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>

                    <Col className="cart-style">
                        <img className="cli-img" src={clien2} alt="" />
                        <h5 className="mt-2 text-primary">Friend Team</h5>
                        <p>Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>

                    <Col className="cart-style">
                        <img className="cli-img" src={clien3} alt="" />
                        <h5 className="mt-2 text-primary">Mr.James</h5>
                        <p>Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>

                    <Col className="cart-style">
                        <img className="cli-img" src={clien4} alt="" />
                        <h5 className="mt-2 text-primary">Mr.Hero Alom</h5>
                        <p className="text-normal text-start">Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>

                    <Col className="cart-style">
                        <img className="cli-img" src={clien5} alt="" />
                        <h5 className="mt-2 text-primary">Natash</h5>
                        <p>Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>

                    <Col className="cart-style">
                        <img className="cli-img" src={clien7} alt="" />
                        <h5 className="mt-2 text-primary">Mr.Jara</h5>
                        <p>Maptia is a collaborative project with a diverse group of photographers, writers, adventurers, and conservationists, who bring their readers a world of inspiring and thought-provoking stories. They are a volunteer-run travel blog spending hundreds of hours over the past 4 years to self-publish impactful travel stories in an independent, ad-free environment.</p>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                        <span className="text-warning"><AiFillStar /></span>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default Clients;