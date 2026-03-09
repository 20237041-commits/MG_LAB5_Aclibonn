import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigate from "./Navigate";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <>
    <div className='Container'>
      <BrowserRouter>
        {/* Navigation stays outside so it's always visible */}
        <Navigate />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        
        {/* EVERYTHING REMOVED FROM HERE */}
      </BrowserRouter>
    </div>
    
 


    </>
    
  );
}

export default App;
