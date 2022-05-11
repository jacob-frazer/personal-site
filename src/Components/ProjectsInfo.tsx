import React, { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion, Variants } from 'framer-motion';

import colours from '../utils/colours';

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
    // redirect function to the more info page for projects
    let navigate = useNavigate();

    // set this up to use state

    // BEGINNING OF TEMP CONTENT COLLECTION - REPLACE WITH REAL SOLUTION (db)
    // get info on project from url and get data
    let { info } = useParams<{ info:string }>();
    let tempData: any = {
        "ukhsa":{
            "headline": "Fighting COVID with UKHSA",
            "intro": "Working as part of the UK Health Security Agency as part of the response to the coronavirus pandemic, I performed in a data specialist role encompassing analysis, data science, engineering and devops.",
            "technologies": ["AWS CDK", "AWS Glue", "AWS Lambda", "Python", "Jupyter"],
            "businessCase": "",
            "explanation": "All the great work I did aaaaa\
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies diam at magna volutpat, vitae pharetra nulla eleifend. Etiam aliquam ligula eget ex aliquam scelerisque. Nam pulvinar gravida dui in ornare. Praesent ipsum dolor, posuere vel sodales eu, eleifend in quam. Fusce malesuada ex venenatis nulla finibus, eget lacinia tellus dapibus. In metus turpis, mollis eu congue et, imperdiet et enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sed convallis nunc. Sed eu viverra lectus, et molestie sapien. Mauris imperdiet ipsum a semper egestas. Quisque venenatis est ac sagittis dapibus.\
                            Fusce non odio vel velit auctor fermentum ac a enim. Nulla imperdiet lacus elit, eget efficitur ipsum tempor nec. Aliquam erat volutpat. Donec egestas tempor purus id pellentesque. Sed non accumsan nisi. Curabitur at nibh tempor felis tristique consectetur vitae eu velit. Pellentesque nisi mauris, aliquet nec enim dapibus, dictum consectetur mi. Vestibulum lobortis leo nec purus molestie tincidunt. Donec malesuada interdum orci, pretium tristique orci commodo consequat. Etiam semper diam ut augue vehicula, ut rhoncus augue ultrices. Ut elementum nisl sed tortor placerat maximus. Vestibulum suscipit pulvinar est, at rutrum nibh gravida sed. Pellentesque lacinia id leo eget auctor. Etiam sagittis eros ac efficitur fringilla. Mauris eu vehicula urna, vel ultrices nisl.\
                            Ut luctus ultricies sagittis. Nam tempus maximus tellus, ac bibendum ex egestas suscipit. Nam aliquam faucibus tristique. Suspendisse maximus, urna sit amet hendrerit vestibulum, elit velit luctus massa, vitae faucibus sapien est ac magna. Cras commodo fermentum ipsum, sit amet luctus lorem molestie non. Etiam sollicitudin tellus vitae elit laoreet, et tristique nisi ullamcorper. Fusce vel iaculis nibh. Duis vitae dignissim nunc. In ut lobortis tortor. Fusce ut leo quis nisi semper aliquet eu sit amet odio. Ut odio massa, placerat at lacus sit amet, varius placerat mauris.\
                            Praesent eu dolor in odio efficitur commodo. Nam porta interdum orci vitae tempus. Aenean scelerisque cursus vestibulum. Integer lacus ligula, consectetur sit amet faucibus ac, consectetur sit amet arcu. Phasellus porta tortor elit, at posuere turpis sollicitudin quis. Morbi vel venenatis ante. Duis ac lacinia tellus. Ut velit lacus, mattis at fringilla vitae, consectetur ut libero.\
                            Sed eleifend quam sed velit venenatis vestibulum eget a velit. Donec sit amet risus mi. Nullam sit amet nisl justo. Morbi aliquet velit at ante finibus tincidunt sed ut risus. Curabitur nec leo ullamcorper, eleifend orci a, consequat ipsum. Sed faucibus dapibus urna ut maximus. Cras vestibulum magna arcu, eget fermentum enim hendrerit sed. Nullam feugiat quam aliquam, rhoncus odio non, commodo mauris. Pellentesque ultricies nibh ac tellus malesuada ullamcorper nec sed felis. Etiam vitae est ultricies, vestibulum elit nec, aliquam risus. Sed vehicula urna ligula, vitae laoreet sem pretium eget.",
            "outcomes": ["Saved hella lives", "thousands pounds in efficiency savings", "etc"],
        },
        "proj2":{
            "headline": "AI health insurance",
            "intro": "Built this dope price predictor for sick people",
            "technologies": ["Python", "IBM Watson", "NLP", "AWS"],
            "businessCase": "Automatd jobs, made bank",
            "explanation": "words words words",
            "outcomes": ["Efficiency increases amounting to over £10M in savings", "made bank"],
        }
    }

    // default so can never be null
    const content = info !== undefined ? tempData[info] : tempData["proj1"]
    // END OF TEMP CONTENT

    return (
        <>
        <Background backgroundCol={colours.black} height='17rem'>
            <CentreText float="left" width="70%" fontcol={colours.white}>
                <Headline>{content.headline}</Headline>
                <Intro>{content.intro}</Intro>
            </CentreText>
            
            <CentreText float="right" width="20%" fontcol={colours.white}>
                <TechnologiesHeader>Technologies</TechnologiesHeader>
                <TechnologiesList>
                    {content.technologies.map((x:string) => <TechnologiesListItem>{x}</TechnologiesListItem>)}
                </TechnologiesList>
            </CentreText>
        </Background>

        <Background backgroundCol={colours.white} height='0.25rem'/>

        <Background backgroundCol={colours.black} height='50rem'>
            <ExplanationText>
                <ExplanationHeader>Deep Dive</ExplanationHeader>
                {content.explanation}
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
                            {content.outcomes.map((x:string) => <OutcomesListItem>{x}</OutcomesListItem>)}
                        </OutcomesList>
                    </ContentBox>
                </motion.div>
            </Outcomes>

        </Background>
        </>
        )
    };

export default ProjectInfo;