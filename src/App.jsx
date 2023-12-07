import React from "react";
import {Home,About,Projects,Contact} from './Pages'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-slate-300/20 h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>

      </main>
    </BrowserRouter>
  );
};

export default App;
