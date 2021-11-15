import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";

const LoadShowService = ({service}) => {
    const { name, country, description, img, price } = service;
    return (
        <div>
            <div className="g-4 service-style">
                <img className="service-img" src={img} alt="" />
                <h4 className="text-primary">Name: {name}</h4>
                <h5 className="text-primary fw-normal">Location: {country}</h5>
                <h4 className="text-primary fw-normal">Ticket: {price}</h4>
                <p className="text-start lh-base">description:{description}</p>
                <Link to={`/booking/${service._id}`}>
                    <button className="badge rounded-pill bg-warning text-dark btn-style"><AiFillEdit className="icon-size" /> Booking Now</button>
                </Link>
            </div>
        </div>
    );
};

export default LoadShowService;