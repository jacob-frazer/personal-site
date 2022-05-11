import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'

import HomePage from './Components/Home';
import NavBar from './Components/NavBar';
import AboutPage from './Components/About';
import PostsPage from './Components/Posts';
import ProjectsPage from './Components/Projects';
import ProjectsInfo from './Components/ProjectsInfo';
import NotFound from './Components/NotFound';

const navigation = {
  brand: { name: "Jacob", to: "/" },
  links: [
    { name: "Projects", to: "/projects" },
    /*{ name: "Blogs", to: "/blogs" },*/
    { name: "About", to: "/about" },
    /*{ name: "Sign In", to: "/signin" },*/
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

              {/*
              <Route path="/blogs" element={<PostsPage/>}/>
              <Route path="/signin" element={<div>SIGNIN</div>}/>
              */}
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
