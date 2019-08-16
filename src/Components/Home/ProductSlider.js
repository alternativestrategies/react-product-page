import React, {Component} from 'react';
import Slider from 'react-slick';
import Products from '../../Data.json';
import {A} from 'hookrouter';

class ProductSlider extends Component {
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
              {
                breakpoint: 930,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
            ]
        }
    
    return (
    <div className="slider">  
      <h2 className="pt-4 pb-2">Search Products</h2>  
        <Slider {...settings}>
          {Products
          .map( product => 
            <div className="slide">
            <A href="products">
            <img 
                src={product.photos} 
                alt={product.name}/>
            </A>  
            </div>
            )}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;