import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

// css animations defined first
const appearRotate = keyframes`
  0% {
    transform: scale(0.94) rotate(75deg);
    opacity: 0.6;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

const selectRotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

// styled components
const CentreIconDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    `;

const IconCircle = styled.div`
    background-color: ${colours.light};
    padding: 40px;
    height: 75%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    animation-name: ${appearRotate};
    animation-duration: 1s;
    animation-iteration-count: 1;
    `;

const Image = styled.img`
    height: 100%;
    `;

const TextBox = styled.div`
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding:10px;
    font-family: Lucida Console, sans-serif;
    `;

const Background = styled.div`
    background-color: ${colours.dark};
    padding: 10px;
    border-radius: 5%;
    box-shadow: 7px 7px #888888;
    &:hover {
        background: ${colours.mid};
        transform: scale(1.02);
        transition: all .2s     
    }
    &:hover ${IconCircle} {
        animation-name: ${selectRotate};
        animation-duration: 0.5s;
    }
    `;

const ProjectBox = (props: {
    proj: { name: string; description: string, status: string, icon: string },
    }) => {
    const { proj } = props;
    return (
        <Background>
            <TextBox>{proj.name}: {proj.description}</TextBox>
            <CentreIconDiv>
                <IconCircle>
                    <Image src={"/images/project_icons/" + proj.icon} alt={proj.name}></Image>
                </IconCircle>
            </CentreIconDiv>
        </Background>
        )
    };

export default ProjectBox;