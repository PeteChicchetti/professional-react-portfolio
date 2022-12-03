import React, { useState } from 'react';

// Import CSS
import "./style.css";
import './App.css';


// Import Components
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"
import Footer from "./components/Footer"

// App function
function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className='App'>
      <Nav 
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
      />
      {pageIndex === 0 ? (
        <About />,
        <Footer />
      ) : pageIndex === 1 ? (
        <Portfolio />,
        <Footer />
      ) : pageIndex === 2 ? (
        <Contact />,
        <Footer />
      ) : pageIndex === 3 ? (
        <Resume />,
        <Footer />
      ) : (
        <About />,
        <Footer />
      )}
    </div>
  );
}

export default App;