// react
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import Header from '../components/Header';
import Slider from '../components/Home/Slider';
import About from '../components/Home/About';
import News from '../components/Home/News';
import SingleSlide from '../components/SingleSlide';
import Footer from '../components/Footer';

// images
import img1 from '../images/slider/2.jpg';
import img2 from '../images/slider/4.jpg';


const Home = (props) => {
    
    useEffect(() => {
        // if path is '/omnie' scroll to 'o mnie' section
        if (props.location.pathname === '/omnie') {
            window.scroll({
                top: 1200,
                behavior: 'smooth'
            });
        } else { // else scroll up
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // check Y position on scroll, in order to set correct url
        document.addEventListener('scroll', checkPosition)

        // remove scroll listener on component unmount
        return () => document.removeEventListener('scroll', checkPosition)
    });

    const checkPosition = () => {
        // if 'o mnie' section is displaying on the screen, then set path to '/omnie'
        if (window.pageYOffset >= 850 && window.pageYOffset < 1800) {
            window.history.pushState('O mnie', 'O mnie', '/omnie');
        } else { // else - if rest of home page is displaying on the screen - set path to '/';
            window.history.pushState('Home', 'Home', '/');
        }
    }

    return (
        <>
            <Header />
            <Slider />
            <About path={props.location.pathname} />
            <News />
            <SingleSlide image={img1} location='/oferta' text='Zobacz szczegóły oferty'/>
            <SingleSlide image={img2} location='/pytania' text='Sprawdź, o co pytają klienci'/>
            <Footer />
        </>
    );
};

Home.propTypes = {
    location: PropTypes.object
};

export default Home;
