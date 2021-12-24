import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Clients.css';
// import { AiFillStar } from "react-icons/ai";
import LoadClient from '../LoadClient/LoadClient';


const Clients = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-mummy-01795.herokuapp.com/userReview')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])
    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-info ">Our clients says</h2>
                <hr className="w-25 mx-auto mb-4" />
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        review.map(opinion => <LoadClient key={opinion._id}
                            opinion={opinion}
                        ></LoadClient>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Clients;