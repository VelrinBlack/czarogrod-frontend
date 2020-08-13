// react
import React, { useEffect } from 'react';

// components
import Header from '../components/Header';
import Form from '../components/Kontakt/Form';
import Footer from '../components/Footer';


const Home = () => {

    useEffect(() => {
        // scroll to the top of the page on load
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <>
            <Header />
            <Form />
            <Footer />
        </>
    );
};

export default Home;
