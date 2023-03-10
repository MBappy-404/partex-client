import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Companies from '../Companies/Companies';
import Features from '../Features/Features';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <About></About>
               <Category></Category>
               <Features></Features>
               <Subscribe></Subscribe>
               <Companies></Companies>
          </div>
     );
};

export default Home;