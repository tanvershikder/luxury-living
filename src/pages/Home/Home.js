import React from 'react';
import Banner from '../../Components/Home/Banner';
import Contact from '../../Components/Home/Contact';
import Projects from '../../Components/Home/Projects';
import Service from '../../Components/Home/Service';
import Testimonial from '../../Components/Home/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;