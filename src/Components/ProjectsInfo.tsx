import React, { Component, useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion, Variants } from 'framer-motion';

import colours from '../utils/colours';
import NotFound from './NotFound';

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    border-radius: 1rem;
    padding: 1rem;
    `;

const CentreText = styled.div<{ float:string, width:string, fontcol:string }>`
    font-size: 1.5rem;
    color: ${props => props.fontcol};
    padding: 1rem;
    float: ${props => props.float};
    height: 85%;
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: left;
    `;

const Background = styled.div<{ backgroundCol: string, height: string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    `;

const ExplanationText = styled.div<{  }>`
    font-size: 1rem;
    column-count: 3;
    column-gap: 4rem;
    column-width: 19rem;
    height: 42rem;
    column-fill: auto;
    float: left;
    padding: 3rem;
    border-right: 2px solid ${colours.white};
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    color: ${colours.white};
    text-align: left;
    `;

const ExplanationHeader = styled.h1`
    column-span: all;
    font-size: 2rem;
    font-weight: 350;
    letter-spacing: 2px;
    `;

const Outcomes = styled.div`
    font-size: 2rem;
    float: right;
    width: 35%;
    padding: 3rem;
    `;

const OutcomesHeader = styled.div`
    font-size: 2rem;
    font-weight: 350;
    letter-spacing: 2px;
    padding: 1rem;
    `;

const OutcomesList = styled.div`
    display: inline-block; 
    text-align: left; 
    width: 90%;
    list-style: none;  
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const OutcomesListItem = styled.li`
    position: relative;
    padding-left: 1.5em;
    padding-top: 1.5rem;

    &:before {
        content: '✓';
        color: ${colours.dark};
        position: absolute;
        left: 0;
        width: 1em;
        height: 1em;
    }
    `;

const TechnologiesHeader = styled.div`
    padding: 0.5rem;
    width: 100%;   
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 2px;
    `;

const TechnologiesList = styled.div`
    text-align: right; 
    padding: 1.5rem;
    width: 100%;   
    flex: 1 1 auto;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const TechnologiesListItem = styled.li`
    list-style-type: none;
    text-align: right;
    justify-content: right;
    `;

const Headline = styled.h1`
    display: flex;
    align-items: left;
    justify-content: left;
    text-align: left; 
    padding: 1rem;
    width: 50%;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 2px;
    `;

const Intro = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
`;

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
            duration: 1,
            delay: 0.2
        }
    }
  };

const ProjectInfo = () => {
    
    const [state, setState] = useState({
                                    headline: "",
                                    intro: "",
                                    technologies: [],
                                    explanation: [],
                                    outcomes: []
                                    });

    let { info } = useParams<{ info:string }>();

    useEffect(()=>{
        fetch('/data/projectsContent.json')
            .then(response => {
            response.json().then(projContent => {
                let specificProjInfo = projContent[info!]
                setState({...specificProjInfo});
            })
        })
    }, [])

    // if undefined then will render the not found page
    const contentExists = (state.explanation === undefined)

    return (
        <>
        {
            contentExists ? 
            <NotFound projects={true}/> : 
            <>
            <Background backgroundCol={colours.black} height='17rem'>
                <CentreText float="left" width="70%" fontcol={colours.white}>
                    <Headline>{state.headline}</Headline>
                    <Intro>{state.intro}</Intro>
                </CentreText>
                
                <CentreText float="right" width="20%" fontcol={colours.white}>
                    <TechnologiesHeader>Technologies</TechnologiesHeader>
                    <TechnologiesList>
                        {state.technologies.map((x:string) => <TechnologiesListItem>{x}</TechnologiesListItem>)}
                    </TechnologiesList>
                </CentreText>
            </Background>

            <Background backgroundCol={colours.white} height='0.25rem'/>

            <Background backgroundCol={colours.black} height='50rem'>
                <ExplanationText>
                    <ExplanationHeader>Deep Dive</ExplanationHeader>
                    {state.explanation.map((para:string) => <p>{para}</p>)}
                </ExplanationText>

                <Outcomes>
                    <motion.div
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 25, bottom: 25 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={BounceFromBelowVariants}
                        >
                        <ContentBox background={colours.white}>
                            <OutcomesHeader>Successes & Outcomes</OutcomesHeader>
                            <OutcomesList>
                                {state.outcomes.map((x:string) => <OutcomesListItem>{x}</OutcomesListItem>)}
                            </OutcomesList>
                        </ContentBox>
                    </motion.div>
                </Outcomes>

            </Background>
        </>
        }
        </>
        )
    };

export default ProjectInfo;