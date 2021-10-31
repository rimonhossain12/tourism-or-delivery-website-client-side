import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';

const Order = () => {
    const {user} = useAuth();
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h4>useName: {user.email}</h4>
                <h2>This is order</h2>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Order;