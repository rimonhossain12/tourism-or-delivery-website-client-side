import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    console.log(user.email);
    const [service,setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${user.email}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div className="container mt-5">
           <h4 className="text-info">Thank You for visit this is site</h4>
            <p className="fw-normal">Dear sir. I am trying to improve my coding skill so far near future. <br/> I can't face this situation. please give me some mark.</p>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PlaceOrder;