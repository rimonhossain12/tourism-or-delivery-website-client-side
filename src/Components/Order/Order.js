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
/* {email:req.params.email} 

/myOrder/:email


/myOrder/:email
const query = {email:req.params.email}

orderCollection.find(query).toArray()

fetch(`http://localhost;5000/myOrder/$(user.email)`

*/

export default Order;