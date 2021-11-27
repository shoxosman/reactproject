import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Birthday from "./pages/product/Birthday";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Wedding from "./pages/product/Wedding";
import Graduation from "./pages/product/Graduation";
import Flowers from "./pages/Categories/Flowers";
import Ballons from "./pages/Categories/Ballons";
import TedyBears from "./pages/Categories/TedyBears";
import Cart from "./pages/Cart";
import HomeCardDetail from "./components/HomeCardDetail";
import BirthdayCardDetail from "./components/BirthdayCardDetail";
import WeddingCardDetail from "./components/WeddingCardDetail";
import GraduationCardDetail from "./components/GraduationCardDetail";
import BalloonCardDetail from "./components/BalloonCardDetail";
import FlowerCardDetail from "./components/FlowerCardDetail";
import TedyBearCardDetail from "./components/TedyBearCradDetail";

function App() {
  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      <TheNavbar />

      {/* Setting up our routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/Birthday/:name"
          element={<BirthdayCardDetail />}
        />
        <Route path="/product/Wedding/:name" element={<WeddingCardDetail />} />
        <Route path="/product/Balloon/:name" element={<BalloonCardDetail />} />
        <Route path="/product/Flower/:name" element={<FlowerCardDetail />} />
        <Route
          path="/product/TedyBear/:name"
          element={<TedyBearCardDetail />}
        />

        <Route
          path="/product/Graduation/:name"
          element={<GraduationCardDetail />}
        />

        <Route path="/product/:name" element={<HomeCardDetail />} />
        <Route path="/products/Birthday" element={<Birthday />} />
        <Route path="/products/Wedding" element={<Wedding />} />
        <Route path="/products/Graduation" element={<Graduation />} />
        <Route path="/categories/Flowers" element={<Flowers />} />
        <Route path="/categories/Balloons" element={<Ballons />} />
        <Route path="/categories/TedyBears" element={<TedyBears />} />

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
