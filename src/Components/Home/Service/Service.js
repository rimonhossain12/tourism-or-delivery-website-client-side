import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import LoadService from '../LoadService/LoadService';
import './Service.css';

const Service = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        // https://tourism-or-delivery-website-server-side.onrender.com/
        // fetch('https://tourism-or-delivery-website-server-side.onrender.com/services')
        fetch('https://tourism-or-delivery-website-server-side.onrender.com/services')
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
                            key={service._id}
                            service={service}
                        ></LoadService>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Service;