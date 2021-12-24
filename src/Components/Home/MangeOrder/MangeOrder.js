import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import { MdDelete } from "react-icons/md";
import useAuth from '../../../hooks/useAuth';


const MangeOrder = () => {
    const [orders, setOrders] = useState([]);
    const { admin } = useAuth();
    useEffect(() => {
        fetch('https://dreadful-mummy-01795.herokuapp.com/userOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleCancelButton = id => {
        console.log('button is click');
        const processed = window.confirm('Are you sure cancel your tour?');
        if (processed) {
            const url = `https://dreadful-mummy-01795.herokuapp.com/cancel/${id}`
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
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }

    }

    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <h4 className="text-info mb-3">All order list!</h4>
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
                                {admin && <th>Deletion</th>}
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
                                        <td className="fw-bold text-success">approved</td>
                                        {admin && <button onClick={() => handleCancelButton(order._id)} className='btn btn-danger my-2 fw-bold'><MdDelete size={25} />Cancel</button>}
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

export default MangeOrder;