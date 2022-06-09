import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import MediaQuery from 'react-responsive'

import HomePage from '@home/Home';
import AboutPage from '@about/About';
import ProjectsPage from '@projects/Projects';
import ProjectsInfo from '@projects/ProjectsInfo';
import NotFound from '@404/NotFound';
import NavBar from '@generics/NavBar';
import Burger from '@generics/BurgerMenu';

import './App.css'

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
            {/* Conditionally render nav bar or burger menu based on media query of screen width */}
            <MediaQuery minWidth={768}>
                {(matches:boolean) => matches ?
                    <NavBar brand={brand} links={links} />:
                    <Burger links={[...[{name: "Home", to: "/"}], ...links]} />  // need to add home to links, but handled differently in NavBar 
                }
            </MediaQuery>
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
