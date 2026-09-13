import React from 'react';

import styled from 'styled-components';
import { motion } from "framer-motion";

import TypeWriter from '@generics/Typewriter';
import { Background } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { SKILLS_TYPEWRITER_LIST, DEVICE_WIDTHS } from '@utils/constants';
import { bounceFromBelowVariants } from '@utils/animations';

const BounceFromBelowVariants = bounceFromBelowVariants();

// each section is shown in its own panel, alternating left and right down the page
const SKILL_SECTIONS = [
    {
        heading: "AI Engineering",
        points: [
            "Built the container platform several JP Morgan research teams use to run cutting edge AI research on GPUs",
            "Experienced building LLM powered applications, from prompt engineering and retrieval to agents and tool use",
            "Use AI coding agents every day to design, build and ship production software faster",
        ]
    },
    {
        heading: "Software Engineering",
        points: [
            "Many years of experience building sophisticated solutions for businesses",
            "Fluent in many of the most common programming languages with an aptitude for learning others",
            "Experience across many industries and domains",
            "Proficient both leading and working in teams of developers",
            "Equally comfortable and experienced working on both greenfield and existing projects",
        ]
    },
    {
        heading: "Data Solutions",
        points: [
            "Experience in Data Engineering, DevOps and Data Science",
            "Familiar with many common data speciality technologies and cloud providers",
            "Proven ability at all stages of the software lifecycle from problem to production to deprecation",
        ]
    },
    {
        heading: "Web Development",
        points: [
            "Full stack web developer with experience using a wide range of softwares and frameworks",
            "Experience working on web applications of all scales from simple to enterprise",
            "Fluent in TypeScript and modern JS frameworks as well as traditional HTML/CSS/JS sites",
        ]
    },
];

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
                {SKILL_SECTIONS.map((section, i) => (
                    <Background key={section.heading} backgroundCol="transparent" height='45rem'>
                        <CentreText
                            float={i % 2 === 0 ? "left" : "right"}
                            fontcol={colours.white}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={BounceFromBelowVariants}
                            >
                            <ContentBox background="transparent">
                                <Heading>{section.heading}</Heading>
                                {section.points.map((point) => <Content key={point}>{point}</Content>)}
                            </ContentBox>
                        </CentreText>
                    </Background>
                ))}
                </>
        )
    }
}

export default Skills;
