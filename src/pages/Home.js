import React, { useEffect } from 'react';

// components
import Header from '../components/Header';
import Slider from '../components/Home/Slider';
import Footer from '../components/Footer';
import About from '../components/Home/About';
import News from '../components/Home/News';

const Home = (props) => {
    useEffect(() => {
        if (props.location.pathname === '/omnie') {
            window.scroll({
                top: 1000,
                left: 0,
            });
        } else {
            window.scroll({
                top: 0,
            });
        }
    });

    return (
        <>
            <Header />
            <Slider />
            <About />
            <News />
            <Footer />
        </>
    );
};

export default Home;
