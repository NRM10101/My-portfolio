import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-slate-300/20">
        <Navbar />
        <Routes>
          <Route path="/" element={'Home'}></Route>
          <Route path="/about" element={'About'}></Route>
          <Route path="/projects" element={'Projects'}></Route>
          <Route path="/contact" element={'Contact'}></Route>

        </Routes>

      </main>
    </BrowserRouter>
  );
};

export default App;
