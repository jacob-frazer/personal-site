import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

import dataBackground from '../images/backgrounds/data.jpg'
import sweBackground from '../images/backgrounds/software-engineering1.jpg'
import webBackground from '../images/backgrounds/internet.jpg'

const DataSolutions = styled.div`
    background-color: ${colours.light};
    height: 1000px;
    `;

const SoftwareEngineer = styled.div`
    background-color: ${colours.dark};
    height: 1000px;
    `;

const WebDevelopment = styled.div`
    background-color: white;
    height: 1000px;
    `;

const LeftText = styled.div`
    font-size: 30px;
    padding: 50px;
    float: left;
    height: 85%;
    `;

const RightText = styled.div`
    font-size: 30px;
    padding: 50px;
    float: right;
    height: 85%;
    color: white;
    `;

const DataSolutionsImage = styled.div`
    font-size: 30px;
    height: 100%;
    width: 1500px;
    float: right;
    background-image: url(${dataBackground});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 85%;
    `;

const SWEImage = styled.div`
    font-size: 30px;
    height: 100%;
    width: 1500px;
    float: left;
    background-image: url(${sweBackground});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 85%;
    `;

const WebDevImage = styled.div`
    font-size: 30px;
    height: 100%;
    width: 1500px;
    float: right;
    background-image: url(${webBackground});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 100%;
    `;

const Container = styled.div`
    
    `;

const Services = () => {
    return (
        <>
        <DataSolutions>
            <LeftText>
                <h1>Data Solutions</h1>
                <div>content</div>
                <div>some image maybe and spinning round/subtle animations</div>
            </LeftText>
            <DataSolutionsImage/>
        </DataSolutions>
        <SoftwareEngineer>
            <RightText>
                <h1>Software Engineering</h1>
                <div>content</div>
                <div>some image maybe and spinning round/subtle animations</div>
                <div>same as above but inverted so like left image and right text instead</div>
                <div>also white text</div>
            </RightText>
            <SWEImage/>
        </SoftwareEngineer>
        <WebDevelopment>
            <LeftText>
                <h1>Web Development</h1>
                <div>content</div>
                <div>some image maybe and spinning round/subtle animations</div>
                <div>back to original</div>
            </LeftText>
            <WebDevImage/>
        </WebDevelopment>
        </>
        )
    };

export default Services;