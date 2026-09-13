import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import colours from '@utils/colours';
import { bounceFromBelowVariants } from '@utils/animations';
import { DEVICE_WIDTHS } from '@utils/constants';
import { Background } from '@generics/SimpleStyledComponents';


const BackLinkRow = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem 0 1.5rem;
    text-align: left;
    `;

const BackLink = styled(Link)`
    color: ${colours.white};
    font-size: 1rem;
    text-decoration: none;
    opacity: 0.8;
    &:hover,
    &:focus {
        opacity: 1;
        text-decoration: underline;
    }
    `;

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    border-radius: 1rem;
    padding: 1rem;
    max-width: 1200px;
    `;

// capped at a comfortable reading width rather than spanning the whole screen
const ExplanationText = styled.div`
    max-width: 70ch;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${colours.white};
    text-align: left;
    `;

const ExplanationHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    `;

const Outcomes = styled.div`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const OutcomesHeader = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    padding: 1rem;
    `;

const OutcomesList = styled.ul`
    display: inline-block;
    text-align: left;
    width: 90%;
    list-style: none;
    margin: 0;
    padding: 0 0 1rem 0;
    font-size: 1.1rem;
    line-height: 1.5;
    `;

const OutcomesListItem = styled.li`
    position: relative;
    padding-left: 1.5em;
    padding-top: 1rem;

    &:before {
        content: '✓';
        color: ${colours.dark};
        font-weight: 700;
        position: absolute;
        left: 0;
        width: 1em;
        height: 1em;
    }
    `;

const TechnologiesHeader = styled.h2`
    margin: 0;
    padding: 2rem 0.5rem 0.5rem 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${colours.white};
    `;

const TechnologiesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    list-style: none;
    `;

const TechnologiesListItem = styled.li`
    color: ${colours.white};
    font-size: 1rem;
    padding: 0.4rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 999px;
    `;

const Headline = styled.h1`
    text-align: center;
    padding: 1.5rem 1rem 1rem 1rem;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
    color: ${colours.white};
    margin: 0;

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 3rem;
    }
    `;

const Intro = styled.p`
    max-width: 60rem;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${colours.white};
    padding: 1rem 1.5rem;

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 1.4rem;
    }
    `;

const BounceFromBelowVariants = bounceFromBelowVariants(0.2);


const ProjectInfo = (props: {projectInfo: {headline: string, intro: string, technologies: string[], explanation: string[], outcomes: string[]}}) => {
    const {headline, intro, technologies, explanation, outcomes} = props.projectInfo;
    return (
            <Background backgroundCol={colours.black}>
                <BackLinkRow>
                    <BackLink to="/projects">← All projects</BackLink>
                </BackLinkRow>
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
                                {outcomes.map((x:string, i:number) => <OutcomesListItem key={i}>{x}</OutcomesListItem>)}
                            </OutcomesList>
                        </ContentBox>
                    </motion.div>
                </Outcomes>

                <TechnologiesHeader>Technologies</TechnologiesHeader>
                <TechnologiesList>
                    {technologies.map((x:string, i:number) => <TechnologiesListItem key={i}>{x}</TechnologiesListItem>)}
                </TechnologiesList>

                <ExplanationText>
                    <ExplanationHeader>Deep Dive</ExplanationHeader>
                    {explanation.map((para:string, i:number) => <p key={i}>{para}</p>)}
                </ExplanationText>

            </Background>
        )
    };

export default ProjectInfo;
