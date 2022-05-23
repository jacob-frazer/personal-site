import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'

import HomePage from './Components/HomePage/Home';
import NavBar from './Components/Generics/NavBar';
import AboutPage from './Components/AboutPage/About';
import ProjectsPage from './Components/ProjectsPage/Projects';
import ProjectsInfo from './Components/ProjectsPage/ProjectsInfo';
import NotFound from './Components/404Page/NotFound';

const navigation = {
  brand: { name: "Jacob", to: "/" },
  links: [
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
  ]
}

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className='App'>
        <BrowserRouter>
            <NavBar brand={brand} links={links} />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/projects" element={<ProjectsPage/>}/>
              <Route path="/projects/:info" element={<ProjectsInfo/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
