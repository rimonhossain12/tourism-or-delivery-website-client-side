import React from 'react';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;