import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './Components/Home';
import NavBar from './Components/NavBar';
import ExplorePage from './Components/Explore';
import PeoplePage from './Components/People';
import PostsPage from './Components/Posts';
import ProductsPage from './Components/Products';
import ProjectsInfo from './Components/ProjectsInfo';
import ServicesPage from './Components/Services';

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
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavBar brand={brand} links={links} />        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>

            {/* yet to be implemented */}
            
            <Route path="/services" element={<ServicesPage/>}/>
            
            <Route path="/signin" element={<div>SIGNIN</div>}/>

            <Route path="/explore" element={<ExplorePage/>}/>
            <Route path="/explore/people" element={<PeoplePage/>}/>
            <Route path="/explore/posts" element={<PostsPage/>}/>

            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/products/:info" element={<ProjectsInfo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
