import React, { Component } from 'react';
import styled from 'styled-components';
import colours from '../utils/colours';

const Background = styled.div`
    background-color: rgb(${colours.light});
    padding: 10px;
    `;

const ProjectBox = (props: {
    proj: { name: string; description: string, status: string, icon: string },
    }) => {
    const { proj } = props;
    return (
        <Background>
            <div>{proj.name}: {proj.description}. Current project status: {proj.status} </div>
            <img src={"/images/project_icons/" + proj.icon} alt={proj.name}></img>
        </Background>
        )
    };

export default ProjectBox;