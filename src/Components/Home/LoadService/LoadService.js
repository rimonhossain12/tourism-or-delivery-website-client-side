import React from 'react';
import './LoadService.css';
import { AiFillEdit } from "react-icons/ai";
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const LoadService = (props) => {
    const { name, country, description, img, price } = props.service;
    // google sing in method using from order users
    const { user } = useAuth();
    return (
        <div>
            <div className="g-4 service-style">
                <img className="service-img" src={img} alt="" />
                <h4 className="text-primary">Name: {name}</h4>
                <h5 className="text-primary fw-normal">Location: {country}</h5>
                <h4 className="text-primary fw-normal">Ticket: {price}</h4>
                <p className="text-start lh-base">description:{description}</p>

               {
                    user.email ? <Link to="/order"><button className="badge rounded-pill bg-warning text-dark btn-style"><AiFillEdit className="icon-size" /> Booking Now</button> </Link>: 
                        <Link to="/login"><button className="btn btn-warning rounded-pill">Please Login Again</button></Link>
               }


            </div>
        </div>
    );
};

export default LoadService;