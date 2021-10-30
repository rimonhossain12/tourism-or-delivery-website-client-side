import React from 'react';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Clients from '../../shared/Clients/Clients';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;