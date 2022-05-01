import React, { Component } from 'react';
import projects from "../data/projects.json";
import styled from 'styled-components';
import ProjectBox from './ProjectBox';
import colours from '../utils/colours';

const TextBox = styled.div`
    color: black;
    align: left;
    display: flex;
    padding: 30px;
    font-size: 36px;
    `;

const ProjGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
    `;

const Background = styled.div`
    background-color: white;
    `;

export default class Products extends Component {
    public render() {
      // call to db (json) to get info about the various projects + picture
  
      // this will pass into project box item to display nicely but for now just info into div
      const ProjList: any = () => projects.map((proj) => <ProjectBox proj={proj}/>);
      return (
        <Background>
            <TextBox>Content and projects that Cob Technologies have worked on, click on one to find out more!</TextBox>
            <ProjGrid>
                <ProjList/>
            </ProjGrid>
        </Background>
      );
    }
  };