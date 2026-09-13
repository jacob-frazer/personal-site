import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MediaQuery from 'react-responsive'

import HomePage from '@home/Home';
// import AboutPage from '@about/About';
import ProjectsPage from '@projects/Projects';
import ProjectsInfo from '@projects/ProjectsInfo';
import NotFound from '@404/NotFound';
import NavBar from '@generics/NavBar';
import MobileNav from '@generics/MobileNav';
import ScrollToTop from '@generics/ScrollToTop';

import './App.css'

const navigation = {
  brand: { name: "Jacob", to: "/" },
  links: [
    { name: "Projects", to: "/projects" },
    // { name: "About", to: "/about" },
  ]
}

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className='App'>
        <BrowserRouter>
            <ScrollToTop/>
            {/* Conditionally render nav bar or mobile menu based on media query of screen width */}
            <MediaQuery minWidth={768}>
                {(matches:boolean) => matches ?
                    <NavBar brand={brand} links={links} />:
                    <MobileNav brand={brand} links={[{name: "Home", to: "/"}, ...links]} />  // mobile menu lists home explicitly, the desktop bar uses the brand link instead
                }
            </MediaQuery>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/projects" element={<ProjectsPage/>}/>
              <Route path="/projects/:info" element={<ProjectsInfo/>}/>
              {/* <Route path="/about" element={<AboutPage/>}/> */}
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
