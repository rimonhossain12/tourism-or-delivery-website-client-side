import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    const url = `http://localhost:5000/users/${email}`;
    console.log(url);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <h4 className="text-info mb-3">Dear Traveller Your order list !</h4>
                <div className="container">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Country Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Deletion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        {/* <td><img src={order.img} className="img-fluid w-25" alt="" /></td> */}
                                        <td>{order.countryName}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td className="fw-bold text-danger">pending...</td>
                                        <td className="btn btn-danger fw-bold text-white">Cancel</td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;