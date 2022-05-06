import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './Components/Home';
import NavBar from './Components/NavBar';
import PeoplePage from './Components/People';
import PostsPage from './Components/Posts';
import ProjectsPage from './Components/Projects';
import ProjectsInfo from './Components/ProjectsInfo';
import ServicesPage from './Components/Services';

const navigation = {
  brand: { name: "CobTech", to: "/" },
  links: [
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Blogs", to: "/blogs" },
    { name: "About", to: "/about" },
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

            <Route path="/skills" element={<ServicesPage/>}/>
            
            <Route path="/signin" element={<div>SIGNIN</div>}/>

            <Route path="/about" element={<PeoplePage/>}/>
            <Route path="/blogs" element={<PostsPage/>}/>

            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/projects/:info" element={<ProjectsInfo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
