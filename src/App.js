import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import React from "react";
import Testimonial from "./components/Testimonial/Testimonial";
import Product from "./pages/Product/Product";
import Itinerary from "./pages/Itinerary/Itinerary";


function App() {
  return (
      <div className="App">

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/product" element={<Product/>}/>
                  <Route path="/itinerary" element={<Itinerary/>}/>
              </Routes>
          </BrowserRouter>

      </div>

  );
}

export default App;
