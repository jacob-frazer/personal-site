import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

const DataSolutions = styled.div`
    background-color: ${colours.light};
    padding: 10px;
    `;

const SoftwareEngineer = styled.div`
    background-color: ${colours.dark};
    padding: 10px;
    `;

const WebDevelopment = styled.div`
    background-color: white;
    padding: 10px;
    `;

const Services = () => {
    return (
        <>
        <DataSolutions>
            <h1>Data Solutions</h1>
            <div>content</div>
            <div>some image maybe and spinning round/subtle animations</div>
        </DataSolutions>
        <SoftwareEngineer>
            <h1>Software Engineering</h1>
            <div>content</div>
            <div>some image maybe and spinning round/subtle animations</div>
            <div>same as above but inverted so like left image and right text instead</div>
            <div>also white text</div>
        </SoftwareEngineer>
        <WebDevelopment>
            <h1>Web Development</h1>
            <div>content</div>
            <div>some image maybe and spinning round/subtle animations</div>
            <div>back to original</div>
        </WebDevelopment>
        </>
        )
    };

export default Services;