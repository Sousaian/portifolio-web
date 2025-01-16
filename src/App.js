import React from 'react';
import Nav from './components/nav';
import MobileNav from './components/nav_mobile';
import Home from './components/home';
import Projects from './components/projetos';
import About from './components/about';

const App = () => {
  return (
    <>
      <Nav />
      <MobileNav />
      <Home />
      <Projects/>
      <About/>
    </>
  );
};

export default App;
