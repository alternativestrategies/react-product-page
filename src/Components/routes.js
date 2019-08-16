import React from 'react';
import Home from './Home/';
import ProductList from './ProductList/'
import Contact from './Contact/';

const routes =  {
  "/": () => <Home /> ,
  "/products": () => <ProductList />,
  "/contact": () => <Contact /> 
};
 
export default routes;