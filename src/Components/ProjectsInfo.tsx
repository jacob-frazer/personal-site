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
    justify-content: center;
    `;

const Background = styled.div<{ backgroundCol: string, height: string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
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
            "technologies": "AWS CDK, AWS Glue, AWS Lambda, Python, Jupyter Notebooks",
            "businessCase": "",
            "explanation": "All the great work I did",
            "outcomes": "Saved hella lives, saved thousands in efficiency savings etc",
        },
        "proj2":{
            "headline": "AI health insurance",
            "intro": "Built this dope price predictor for sick people",
            "technologies": "Python, IBM Watson, NLP, AWS",
            "businessCase": "Automatd jobs, made bank",
            "explanation": "words words words",
            "outcomes": "Automatd jobs, made bank",
        }
    }

    // default so can never be null
    const content = info !== undefined ? tempData[info] : tempData["proj1"]
    // END OF TEMP CONTENT

    return (
        <>
        <Background backgroundCol='white' height='300px'>
            <CentreText float="left" width="70%" fontcol="black">
                <h1>{content.headline}</h1>
                <div>{content.intro}</div>    
            </CentreText>
            
            <CentreText float="right" width="20%" fontcol="black">
                <strong>Key Technologies:</strong><br/>
                {content.technologies}
            </CentreText>
        </Background>

        <Background backgroundCol='grey' height='10px'/>

        <div>
            <div>{content.explanation}</div>
            <div>{content.outcomes}</div>
        </div>
        </>
        )
    };

export default ProjectInfo;