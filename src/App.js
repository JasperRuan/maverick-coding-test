import './App.css';
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import React from "react";
import Testimonial from "./components/Testimonial/Testimonial";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;
