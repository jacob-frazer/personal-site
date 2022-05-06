import React, { Component } from 'react';
import projects from "../data/projects.json";
import styled from 'styled-components';

import colours from '../utils/colours';

import ProjectCard from './ProjectCard';

const TextBox = styled.div`
    color: black;
    align: left;
    display: flex;
    padding: 30px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const Background = styled.div`
    background-color: white;
    `;


// attempting to convert into TS
const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    `;


export default class Projects extends Component {
    public render() {
      // call to db (json) to get info about the various projects + picture
  
      // this will pass into project box item to display nicely but for now just info into div
      const ProjList: any = () => projects.map((proj) => <ProjectCard proj={proj}/>);
      return (
        <Background>
            <TextBox>Content and projects that I have worked on, click on one to find out more!</TextBox>
            <Cards>
                <ProjList/>
            </Cards>
        </Background>
      );
    }
  };