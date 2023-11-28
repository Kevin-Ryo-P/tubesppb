import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Random from "./Pages/Random";
import About from "./Pages/About";
import BreedsList from "./Pages/BreedsList";
import Categories from "./Pages/Categories";
import BreedsDetail from "./Pages/BreedsDetail"
import CatImage from "./Pages/CatImage";


function App(){
  return(
    <div className="app">
      <header className = "header">
        <div className = "containerhead">
          <h1>Welcome to Catto!</h1>
        </div>
      </header>
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate replace to="/random" />} />
          <Route path="/random" element={<Random />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/breedslist" element={<BreedsList />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/breedslist/:itemId" element={<BreedsDetail />}></Route>
          <Route path="/categories/:itemId" element={<CatImage />}></Route>

        </Routes>
        <footer>
          <div className="containernav">
            <NavLink to="/random" className="iconwrapper">
              Random Image
            </NavLink>
            <NavLink to="/breedslist" className="iconwrapper">
              Breeds
            </NavLink>
            <NavLink to="/categories" className="iconwrapper">
              Categories
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
              About
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );

}

export default App;