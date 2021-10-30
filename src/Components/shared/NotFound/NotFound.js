import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/notfound/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
          <div className="container">
                <img className="notfound-img" src={notFound} alt="" />
                <br />
                <h4 className="text-info text-center text-italice mx-auto fw-normal">Sorry Can't find the page please come back to the main page</h4>
                <Link to="/home"> <button className="btn badge rounded-pill badge bg-danger btn-style">Back Home</button></Link>
          </div>
        </div>
    );
};

export default NotFound;