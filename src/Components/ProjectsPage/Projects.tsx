import { Component } from 'react';

import styled from 'styled-components';
import { motion, Variants} from 'framer-motion';

import ProjectCard from '@projects/ProjectCard';
import { Background, BasicText, LoadingPage } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';

const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
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
            <BasicText fontCol={colours.white} fontSize='1.5rem' padding='2rem' fontWeight='300' letterSpacing='2px' display='flex'>
                Some of my favourite content and projects that I have worked on, click on one to find out more!
            </BasicText>
            <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
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