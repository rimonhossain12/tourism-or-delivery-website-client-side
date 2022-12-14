import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import LoadShowService from './LoadShowService';


const ShowService = () => {
    const [services, setService] = useState([]); 
    useEffect(() => {
        // fetch('https://tourism-or-delivery-website-server-side.onrender.com/services')
        fetch('https://tourism-or-delivery-website-server-side.onrender.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h3 className="text-info mt-5 mb-5">What kind of travelling service we are provide</h3>
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <LoadShowService
                            key={service._id}
                            service={service}
                        ></LoadShowService>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default ShowService;