import React from 'react';
import './LoadService.css';
import { AiFillEdit } from "react-icons/ai";

const LoadService = (props) => {
    const { name, country, description, img, price } = props.service;
    return (
        <div>
           <div className="g-4 service-style">
                <img className="service-img" src={img} alt="" />
                <h4 className="text-primary">Name: {name}</h4>
                <h5 className="text-primary fw-normal">Location: {country}</h5>
                <h4 className="text-primary fw-normal">Ticket: {price}</h4>
                <p className="text-start lh-base">description:{description}</p>
                <button className="badge rounded-pill bg-warning text-dark btn-style"><AiFillEdit className="icon-size"/> Booking Now</button>
           </div>
        </div>
    );
};

export default LoadService;