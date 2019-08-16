import React from 'react';
import {useRoutes} from 'hookrouter';
import routes from './Components/routes';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const routeResult = useRoutes(routes);
  return(
    <React.Fragment>
     
      <Navigation/>
      <Header />
        {routeResult}
      
      <Footer />
    </React.Fragment>
  );
}

export default App;
