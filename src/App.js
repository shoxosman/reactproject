import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import GoToTop from "./components/GotToTop"

import "./App.css";
import ErrorPage from "./components/ErrorPage";

import Cart from "./pages/Cart";
import HomeCardDetail from "./components/HomeCardDetail";
import ItemsOfSingleCategory from "./pages/ItemsOfSingleCategory";


function App() {
  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      <TheNavbar />

      {/* Setting up our routes */}
        <GoToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<HomeCardDetail />} />
        <Route
          path="/products/filter/:category"
          element={
            <div className="card-div">
   <ItemsOfSingleCategory/>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        {/* if the URL is /login  , render the Login component */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
