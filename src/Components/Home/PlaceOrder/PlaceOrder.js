import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import './PlaceOrder.css';
import { MdDelete } from "react-icons/md";
import Header from '../Header/Header';

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
    }, [url, email]);

    // Cancel product url
    const handleCancelButton = id => {
        console.log('button is click');
        const processed = window.confirm('Are you sure cancel your tour?');
       if(processed){
           const url = `http://localhost:5000/cancel/${id}`
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(Date)
        })
               .then(res => res.json())
               .then(data => {
                   console.log('data', data);
                   if (data.deletedCount > 0) {
                       const remainingOrders = orders.filter( order => order._id !== id);
                       setOrder(remainingOrders);
                   }
               })
       }

    }

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
                                <th>IMG</th>
                                <th>Country Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                 <th>Price</th>
                                <th>Status</th>
                                <th>Deletion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td><img src={order.img} style={{ height: '50px', width: '100%' }} alt="" /></td>
                                        <td>{order.countryName}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>${order.price}</td>
                                        <td className="fw-bold text-danger">pending...</td>
                                        <button onClick={() => handleCancelButton(order._id)} className='btn btn-danger my-2 fw-bold'><MdDelete size={25} />Cancel</button>
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