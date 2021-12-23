import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './LoadClient.css';

const LoadClient = ({ opinion }) => {
    const { name, country, profession, rewview, img } = opinion;
    return (
        <div className='mt-5'>
            <Col>
                <Card>
                    <div className="circular--landscape">
                        <img src={img} alt='' />
                    </div>
                    <div className='mt-2'>
                        <h5 className='text-info fw-bold'>{name}</h5>
                        <h6 className='text-info fw-normal'>{country}</h6>
                        <span className='text-secondary fw-normal'>{profession}</span>
                        <p className='text-center text-secondary text-normal'>{rewview}</p>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default LoadClient;