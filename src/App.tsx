import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'

import HomePage from '@home/Home';
import NavBar from '@generics/NavBar';
import AboutPage from '@about/About';
import ProjectsPage from '@projects/Projects';
import ProjectsInfo from '@projects/ProjectsInfo';
import NotFound from '@404/NotFound';

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
