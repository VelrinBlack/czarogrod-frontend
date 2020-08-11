// react
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import Header from '../components/Header';
import Slider from '../components/Home/Slider';
import About from '../components/Home/About';
import News from '../components/Home/News';
import Footer from '../components/Footer';


const Home = (props) => {
    
    useEffect(() => {
        // if path is "/omnie" scroll to "o mnie" section
        if (props.location.pathname === '/omnie') {
            window.scroll({
                top: 850,
                behavior: 'smooth',
            });
        } else { // else scroll up
            window.scroll({
                top: 0,
                behavior: 'smooth',
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

Home.propTypes = {
    location: PropTypes.string
};

export default Home;
