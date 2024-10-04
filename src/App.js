import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App(){
  return(
    <>     

<Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
   
    
    </>
  )
}
export default App;