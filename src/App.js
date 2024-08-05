import React from 'react';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
   
      <>
      <section id='Home'>
       
        <Navbar />
        </section>

        <section id='Product'>
        
      <Shop  />
      </section>
        <Footer />
      </>
   
  );
};

export default App;
