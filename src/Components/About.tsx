import React from 'react';

import styled from 'styled-components';

import colours from '../utils/colours';

import Connections from './Connections';

const Background = styled.div<{ backgroundCol: string, height: string, backgroundGradient?:string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    z-index: 10;
    position: relative;

    ${props => props.backgroundGradient && `
        background:linear-gradient(${props.backgroundCol}, ${props.backgroundGradient})
    `}
    `;

const AboutHeader = styled.div`
  font-size: 5rem;
  color: ${colours.white};
  width: 75%;
  display: float;
  float: left;
  padding: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  `;

const AboutText = styled.div`
  font-size: 2rem;
  color: ${colours.white};
  width: 58%;
  padding: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  `;

class AboutPage extends React.Component{
    render(){
      return(
        <>
        <Background backgroundCol={colours.black} height="93vh">
          <AboutHeader>Who am I?</AboutHeader>
          <AboutText>
            Hey, I am Jacob, a software developer and data specialist who enjoys solving interesting business problems
          </AboutText>
          <AboutText>
            I live in London and I love to code (I even do it on the weekends)
          </AboutText>
          <AboutText>
            In my free time I like to learn - doesn't matter what, as long as it's stimulating!
          </AboutText>
          <Connections colour='light' padding="10rem 0 0 0"/>
        </Background>
        </>
      )
    }
  }

export default AboutPage