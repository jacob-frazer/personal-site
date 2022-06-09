import React from 'react';

import styled from 'styled-components';
import { motion, Variants } from "framer-motion";

import TypeWriter from '@generics/Typewriter';
import { Background } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { SKILLS_TYPEWRITER_LIST, DEVICE_WIDTHS } from '@utils/constants';

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
    padding: 5rem 0.75rem 0.75rem 0.75rem;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${props => props.fontcol};
    `;

const Content = styled.div`
    padding-top: 1rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 2px;

    @media ${DEVICE_WIDTHS.tablet} {
        padding-top: 1.5rem;
        font-size: 1.2rem;
      }
    @media ${DEVICE_WIDTHS.laptop} {
        padding-top: 1.5rem;
        font-size: 1.2rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        padding-top: 2rem;
        font-size: 1.5rem;
      }
    `;

const Heading = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 2px;

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 1.1rem;
      }
    @media ${DEVICE_WIDTHS.laptop} {
        font-size: 1.65rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 2.2rem;
      }
    `;

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    `;

const CentreText = styled(motion.div)<{ float:string, fontcol:string }>`
    font-size: 1.5rem;
    color: ${props => props.fontcol};
    padding: 0.25rem;
    float: ${props => props.float};
    height: 85%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${DEVICE_WIDTHS.tablet} {
        width:75%;
      }
    @media ${DEVICE_WIDTHS.laptop} {
        width:50%;
        padding: 1.2rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        width:40%;
        padding: 1.5rem;
      }
    `;

const TypewriterText = styled.div<{ fontcol:string, background:string }>`
    color: ${props => props.fontcol};
    background-color: ${props => props.background};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 2rem;
      }
    @media ${DEVICE_WIDTHS.laptop} {
        font-size: 2.25rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 2.5rem;
      }
    `;

    
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
                        Read on to find out about my experience with
                        <TypewriterText background="transparent" fontcol={colours.white}>
                            <TypeWriter strings={SKILLS_TYPEWRITER_LIST}/>
                        </TypewriterText>
                    </Experience>
                </Background>
                <Background backgroundCol="transparent" height='45rem'>
                    <CentreText 
                        float="left" 
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