import React from 'react';

import styled from 'styled-components';
import Typed from 'typed.js';
import { motion, Variants } from "framer-motion";

import colours from '@utils/colours';
import { SKILLS_TYPEWRITER_LIST } from '@utils/constants';

const BounceFromBelowVariants: Variants = {
    offscreen: {
        y: 150,
        opacity: 0
      },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
        }
    }
};

const Experience = styled(motion.div)<{ fontcol:string }>`
    padding: 10rem;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${props => props.fontcol};
    `;

const Content = styled.div`
    padding-top: 30px;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const Heading = styled.div`
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 2px;
    `;

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    `;

const Background = styled.div<{ backgroundCol: string, height: string, backgroundGradient?:string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    z-index: 10;
    position: relative;
    opacity: 90%;

    ${props => props.backgroundGradient && `
        background:linear-gradient(${props.backgroundCol}, ${props.backgroundGradient})
    `}
    `;

const CentreText = styled(motion.div)<{ float:string, width:string, fontcol:string }>`
    font-size: 1.5rem;
    color: ${props => props.fontcol};
    padding: 1.5rem;
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
    padding: 2rem;
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
      const { strings } = this.props;
      const options = {
          strings: strings,
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          loopCount: Infinity,
          shuffle: true,
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

class Skills extends React.Component {
    render() {
        return (
                <>
                <Background backgroundCol="transparent" height='200px' backgroundGradient={colours.black}>
                    <Experience 
                        fontcol={colours.white}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={BounceFromBelowVariants}
                        viewport={{ once: true, amount: 0.5 }}
                        >
                        Find out about my experience with
                        <TypewriterText background="transparent" fontcol={colours.white} fontsize='2.5rem'>
                            <TypeWriter strings={SKILLS_TYPEWRITER_LIST}/>
                        </TypewriterText>
                    </Experience>
                </Background>
                <Background backgroundCol="transparent" height='45rem' backgroundGradient={colours.black}>
                    <CentreText 
                        float="left" 
                        width="40%" 
                        fontcol={colours.white}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={BounceFromBelowVariants}
                        >
                        <ContentBox background="transparent">
                            <Heading>Data Solutions</Heading>
                            <Content>Data professional with elite experience across the entire spectrum of data solutions</Content>
                            <Content>Experience in Data Engineering, DevOps and Data Science</Content>
                            <Content>Familiar with all common data speciality technologies and cloud providers</Content>
                            <Content>Proven ability at all stages of the software lifecycle from problem to live solution to wind-down</Content>
                        </ContentBox>
                    </CentreText>
                </Background>
                <Background backgroundCol="transparent" height='45rem'>
                    <CentreText 
                        float="right" 
                        width="40%" 
                        fontcol="white"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={BounceFromBelowVariants}
                        >
                        <div>
                            <Heading>Software Engineering</Heading>
                            <Content>Many years of experience building sophisticated solutions for businesses</Content>
                            <Content>Fluent in many of the most common programming languages with an aptitude for learning others</Content>
                            <Content>Experience across many industries and domains</Content>
                            <Content>Led teams of developers including education sessions on standard SDLC and version control systems</Content>
                            <Content>Just as capable starting a project from scratch or adapting to an existing codebase</Content>
                        </div>
                    </CentreText>
                </Background>
                <Background backgroundCol="transparent" height='45rem'>
                    <CentreText 
                        float="left" 
                        width="40%" 
                        fontcol={colours.white}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={BounceFromBelowVariants}
                        >
                        <ContentBox background="transparent">
                            <Heading>Web Development</Heading>
                            <Content>Full stack web developer with experience using a wide range of softwares and languages</Content>
                            <Content>Experience working on web applications of all scales from simple to enterprise</Content>
                            <Content>Fluent in TypeScript and modern JS frameworks as well as traditional HTML/CSS/JS sites</Content>
                            <Content>Familiarity with Web 3.0 technologies including Solidity & web3js</Content>
                        </ContentBox>
                    </CentreText>
                </Background>
                </>
        )
    }
}

export default Skills;