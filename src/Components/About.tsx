import React from 'react';

import styled from 'styled-components';

import colours from '../utils/colours';

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
  width: 100%;
  display: float;
  float: left;
  padding: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  `;

const AboutText = styled.div`
  font-size: 2rem;
  color: ${colours.white};
  width: 50%;
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
            Hey, I am Jacob, a software developer and data specialist
          </AboutText>
          <AboutText>
            I love to code (I even do it on the weekends)
          </AboutText>
        </Background>
        </>
      )
    }
  }

export default AboutPage