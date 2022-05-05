import React, { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

const ContentBox = styled.div<{ background: string }>`
    background-color: ${props => props.background};
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px #e3e3e3;
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
    justify-content: left;
    `;

const Background = styled.div<{ backgroundCol: string, height: string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    `;

const ExplanationText = styled.div<{  }>`
    font-size: 20px;
    column-count: 4;
    column-gap: 100px;
    column-width: 300px;
    height: 850px;
    column-fill: auto;
    float: left;
    padding: 50px;
    border-right: 5px solid grey;
    `;

const ExplanationHeader = styled.h1`
    font-size: 40px;
    column-span: all;
    `;

const Outcomes = styled.div`
    font-size: 40px;
    float: right;
    width: 35%;
    padding: 50px;
    `;

const OutcomesList = styled.div`
    display: inline-block; 
    text-align: left; 
    width: 90%;
    list-style: none;        
    `;

const OutcomesListItem = styled.li`
    position: relative;
    padding-left: 1.5em;

    &:before {
        content: '✅';
        color: green;
        position: absolute;
        left: 0;
        width: 1em;
        height: 1em;
    }
    `;

const TechnologiesList = styled.div`
    text-align: right; 
    padding: 80px;
    width: 90%;     
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
    padding: 10px;
    width: 50%;
    `;

const ProjectInfo = () => {
    // redirect function to the more info page for projects
    let navigate = useNavigate();

    // set this up to use state

    // BEGINNING OF TEMP CONTENT COLLECTION - REPLACE WITH REAL SOLUTION (db)
    // get info on project from url and get data
    let { info } = useParams<{ info:string }>();
    let tempData: any = {
        "proj1":{
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
        <Background backgroundCol='white' height='300px'>
            <CentreText float="left" width="70%" fontcol="black">
                <Headline>{content.headline}</Headline>
                <div>{content.intro}</div>    
            </CentreText>
            
            <CentreText float="right" width="20%" fontcol="black">
                <strong>Technologies </strong>
                <TechnologiesList>
                    {content.technologies.map((x:string) => <TechnologiesListItem>{x}</TechnologiesListItem>)}
                </TechnologiesList>
            </CentreText>
        </Background>

        <Background backgroundCol='grey' height='10px'/>

        <Background backgroundCol={colours.mid} height='1000px'>
            <ExplanationText>
                <ExplanationHeader>Deep Dive</ExplanationHeader>
                {content.explanation}
            </ExplanationText>

            <Outcomes>
                <ContentBox background='white'>
                    <h4>Successes & Outcomes</h4>
                    <OutcomesList>
                        {content.outcomes.map((x:string) => <OutcomesListItem>{x}</OutcomesListItem>)}
                    </OutcomesList>
                </ContentBox>
            </Outcomes>

        </Background>
        </>
        )
    };

export default ProjectInfo;