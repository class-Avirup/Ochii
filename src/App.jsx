import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Contact />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route index element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
