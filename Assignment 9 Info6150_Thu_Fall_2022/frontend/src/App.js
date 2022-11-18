import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./App/About/About";
import Contact from "./App/Contact/Contact";
import Home from "./App/Home/Home";
import Jobs from "./App/Jobs/Jobs";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default App;
