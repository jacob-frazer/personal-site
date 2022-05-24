import React, { Component } from 'react';

import styled from 'styled-components';
import { motion, Variants} from 'framer-motion';

import colours from '@utils/colours';

import ProjectCard from '@projects/ProjectCard';
import { Background } from '@generics/SimpleStyledComponents';

const TextBox = styled.div`
    color: ${colours.white};
    align: left;
    display: flex;
    padding: 30px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 2px;
    `;


// attempting to convert into TS
const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    `;

const LoadingPage = styled.div`
    height: 100vh;
    background-color: black;
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

export default class Projects extends Component {
    state = {
        projects: [],
        loaded: false
    }

    componentDidMount() {
        fetch("/data/projectsInfo.json")
        .then(response => {
            response.json().then(projInfo => {
                this.setState({
                    ...this.state,
                    projects: projInfo,
                    loaded: true
                })
            })
        })
    }

    render() {
      return (
        <Background backgroundCol={colours.black}>
            {!this.state.loaded ? 
            <LoadingPage/> : 
            <>
            <TextBox>Some of my favourite content and projects that I have worked on, click on one to find out more!</TextBox>
            <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={BounceFromBelowVariants}
                    >
                <Cards>
                    {this.state.projects.map((proj) => <ProjectCard proj={proj}/>)}
                </Cards>
            </motion.div>
            </>
            }
            
        </Background>
      );
    }
  };