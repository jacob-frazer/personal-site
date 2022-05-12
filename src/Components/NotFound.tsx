import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import colours from '../utils/colours';

const RobotImage = styled.img`
    filter: brightness(0) invert(1);
    display: flex;
    float: right;
    padding: 3rem;
    `;

const Background = styled.div<{ backgroundCol: string, height: string, backgroundGradient?:string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    z-index: 10;
    position: relative;

    ${props => props.backgroundGradient && `
        background:linear-gradient(${props.backgroundCol}, ${props.backgroundGradient})
    `}
    `;

const Header404 = styled.div`
    color: ${colours.white};
    font-size: 4rem;
    padding: 4rem;
    font-weight: 500;
    letter-spacing: 2px;
    `;

const Body404 = styled.div`
    color: ${colours.white};
    font-size: 1.5rem;
    padding: 5rem;
    font-weight: 400;
    letter-spacing: 2px;
    `;

const Return404 = styled(Link)`
    color: ${colours.white};
    font-size: 1.5rem;
    padding: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-decoration: none;
    border: 1px solid white;
    `;

class NotFound extends React.Component<{projects?:boolean}>{
    render(){
      return(
        <>
            <Background backgroundCol={colours.black} height="94vh">
                <RobotImage src="/images/404/broken-robot.png"/>
                <Header404>404.</Header404>
                {
                    this.props.projects ? 
                    <Body404>Sorry, I haven't worked on a project with that name. Maybe one day!</Body404> :
                    <Body404>Sorry, that page doesn't exist.</Body404>
                }
                <Return404 to="/">Take me back <strong>home</strong></Return404>
                
            </Background>
        </>
      )
    }
  }

export default NotFound