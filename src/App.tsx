import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './Components/Home';
import NavBar from './Components/NavBar';

const navigation = {
  brand: { name: "CobTech", to: "/" },
  links: [
    { name: "Products", to: "/products" },
    { name: "Services", to: "/services" },
    { name: "Explore", to: "/explore" },
    { name: "Sign In", to: "/signin" },
  ]
}

export default class App extends Component {
  public render() {
    // Descructured object for cleaner code :-)
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavBar brand={brand} links={links} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>

            {/* yet to be implemented */}
            <Route path="/products" element={<div>PRODUCTS</div>}/>
            <Route path="/services" element={<div>SERVICES</div>}/>
            <Route path="/explore" element={<div>EXPLORE</div>}/>
            <Route path="/signin" element={<div>SIGNIN</div>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
