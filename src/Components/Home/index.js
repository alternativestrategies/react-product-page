import React from "react";
import ProductSlider from './ProductSlider';
import MainCarousel from './MainCarousel';
import About from './About';

const Home = () => {
    return( 
      <div>
        <MainCarousel />
        <ProductSlider />
        <About />
        <div className="pt-4 pb-n4">
        <hr />
        </div>
      </div>
    );
}
export default Home;
