import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

import Typed from 'typed.js';

import dataBackground from '../images/backgrounds/data.jpg'
import sweBackground from '../images/backgrounds/software-engineering1.jpg'
import webBackground from '../images/backgrounds/internet.jpg'

const Content = styled.div`
    padding-top: 30px;
    text-align: left;
    `;

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px #e3e3e3;
    `;

const Background = styled.div<{ backgroundCol: string, height: string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    `;

const ImageBox = styled.div<{ width: string, float:string, image:string, opacity:string}>`
    height: 100%;
    width: ${props => props.width};
    float: ${props => props.float};
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: ${props => props.opacity};
    `;

const CentreText = styled.div<{ float:string, width:string, fontcol:string }>`
    font-size: 30px;
    color: ${props => props.fontcol};
    padding: 30px;
    float: ${props => props.float};
    height: 85%;
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const TypewriterText = styled.div<{ fontsize: string, fontcol:string, background:string }>`
    font-size: ${props => props.fontsize};
    color: ${props => props.fontcol};
    background-color: ${props => props.background};
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
    
interface TypeWriter {
    el: any,
    typed: Typed
}
class TypeWriter extends React.Component<{ strings: Array<string> }> {

    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          loopCount: Infinity,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }

    render() {
        return (
            <span ref={(el) => { this.el = el; }}/>
        )
    }
}

class Services extends React.Component {
    render() {
        return (
                <>
                <Background backgroundCol={colours.lightgrey} height='200px'>
                    <h1>Find out about my experience with
                    <TypewriterText background={colours.dark} fontcol={colours.mid} fontsize='36pt'>
                        <TypeWriter strings={[
                                "Data Science",
                                "Python",
                                "Software Development",
                                "Dev Ops",
                                "Javascript",
                                "Data Engineering",
                                "Web Development",
                                "Cloud Infrastructure",
                                "Big Data",
                                "Rust",
                        ]}/>
                    </TypewriterText>
                    </h1>
                </Background>
                <Background backgroundCol={colours.lightgrey} height='1000px'>
                    <CentreText float="left" width="40%" fontcol="black">
                        <div>
                        <ContentBox background="white">
                            <h1>Data Solutions</h1>
                            <Content>Data professional with elite experience across the entire spectrum of data solutions</Content>
                            <Content>Experience in Data Engineering, DevOps and Data Science</Content>
                            <Content>Familiar with all common technologies and cloud providers in the domain</Content>
                            <Content>Proven ability at all stages of the software lifecycle from problem to live solution to wind-down</Content>
                        </ContentBox>
        
                        </div>
                    </CentreText>
                    <ImageBox width="55%" float="right" image={dataBackground} opacity="85%"/>
                </Background>
                <Background backgroundCol="black" height='1000px'>
                    <CentreText float="right" width="40%" fontcol="white">
                        <div>
                            <h1>Software Engineering</h1>
                            <Content>Many years of experience building sophisticated solutions for businesses</Content>
                            <Content>Fluent in many of the most common programming languages and can quickly learn others to adapt to your existing codebases</Content>
                            <Content>Experience across many industries and domains</Content>
                            <Content>Led teams of developers including education sessions on standard SDLC and version control systems</Content>
                        </div>
                    </CentreText>
                    <ImageBox width="55%" float="left" image={sweBackground} opacity="85%"/>
                </Background>
                <Background backgroundCol={colours.lightgrey} height='1000px'>
                    <CentreText float="left" width="40%" fontcol="black">
                        <ContentBox background="white">
                            <h1>Web Development</h1>
                            <Content>Full stack web developer</Content>
                            <Content>Experience on web applications of all scales from simple to enterprise</Content>
                            <Content>Fluent in TypeScript and modern JS frameworks as well as Web 3.0 technologies including Solidity</Content>
                        </ContentBox>
                    </CentreText>
                    <ImageBox width="55%" float="right" image={webBackground} opacity="85%"/>
                </Background>
                </>
        )
    }
}

export default Services;