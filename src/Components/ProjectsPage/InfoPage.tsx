import React, { Component } from 'react';

import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

import colours from '@utils/colours';
import { Background } from '@generics/SimpleStyledComponents';


const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    border-radius: 1rem;
    padding: 1rem;
    max-width: 1200px
    `;

const ExplanationText = styled.div<{  }>`
    font-size: 1rem;
    padding: 3rem;
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: 1.3px;
    color: ${colours.white};
    text-align: left;
    `;

const ExplanationHeader = styled.h1`
    font-size: 2rem;
    font-weight: 350;
    letter-spacing: 2px;
    `;

const Outcomes = styled.div`
    font-size: 2rem;
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding: 3rem 0.5rem 0.5rem 0.5rem;
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 2px;
    color: ${colours.white};
    `;

const TechnologiesList = styled.div`
    padding: 1.5rem;
    flex: 1 1 auto;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${colours.white};
    column-count: 2;
    text-align: center;
    `;

const TechnologiesListItem = styled.li`
    list-style-type: none;
    `;

const Headline = styled.h1`
    justify-content: centre;
    text-align: centre; 
    padding: 5rem 1rem 1rem 1rem;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: ${colours.white};
    margin: 0;
    `;

const Intro = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${colours.white};
    padding: 1.5rem;
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


const ProjectInfo = (props: {projectInfo: {headline: string, intro: string, technologies: string[], explanation: string[], outcomes: string[]}}) => {
    const {headline, intro, technologies, explanation, outcomes} = props.projectInfo;
    return (
            <Background backgroundCol={colours.black}>
                <Headline>{headline}</Headline>
                <Intro>{intro}</Intro>

                <Outcomes>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={BounceFromBelowVariants}
                        >
                        <ContentBox background={colours.white}>
                            <OutcomesHeader>Successes & Outcomes</OutcomesHeader>
                            <OutcomesList>
                                {outcomes.map((x:string) => <OutcomesListItem>{x}</OutcomesListItem>)}
                            </OutcomesList>
                        </ContentBox>
                    </motion.div>
                </Outcomes>

                <TechnologiesHeader>Technologies</TechnologiesHeader>
                <TechnologiesList>
                    {technologies.map((x:string) => <TechnologiesListItem>{x}</TechnologiesListItem>)}
                </TechnologiesList>
            
                <ExplanationText>
                    <ExplanationHeader>Deep Dive</ExplanationHeader>
                    {explanation.map((para:string) => <p>{para}</p>)}
                </ExplanationText>

            </Background>
        )
    };

export default ProjectInfo;