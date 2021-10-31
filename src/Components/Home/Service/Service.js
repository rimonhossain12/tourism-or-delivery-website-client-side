import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import LoadService from '../LoadService/LoadService';
import './Service.css';

const Service = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    return (
        <div>
            <h3 className="text-info mt-5 mb-5">What kind of travelling service we are provide</h3>
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <LoadService
                        service={service}
                    ></LoadService>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Service;