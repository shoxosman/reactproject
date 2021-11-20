import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import About from "./pages/About";
import Birthday from "./pages/product/Birthday";

import "./App.css";
import Wedding from "./pages/product/Wedding";
import Graduation from "./pages/product/Graduation";
import Products from "./pages/product/Products";

function App() {
  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      <TheNavbar />

      {/* Setting up our routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/Birthday" element={<Birthday />} />
        <Route path="/products/Wedding" element={<Wedding />} />
        <Route path="/products/Graduation" element={<Graduation />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/about" element={<About />} />
        {/* if the URL is /login  , render the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
