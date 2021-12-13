import React from 'react';
// import About from '../../About/About';
// import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Clients from '../../shared/Clients/Clients';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
             <Service></Service>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;