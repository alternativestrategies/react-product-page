import React from 'react';
import Home from './Home/';
import ProductList from './ProductList/'
import Contact from './Contact/';

const routes =  {
  "/react-product-page/": () => <Home /> ,
  "/react-product-page/products": () => <ProductList />,
  "/react-product-page/contact": () => <Contact /> 
};
 
export default routes;