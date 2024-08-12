import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/intro/intro';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactUs from './Components/Contactus/ContactUs';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <ContactUs/>
      <Footer/>
      

    </div>
  );
}

export default App;
