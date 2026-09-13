import { Component } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import ProjectCard from '@projects/ProjectCard';
import LoadError from '@generics/LoadError';
import { Background, BasicText, LoadingPage } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { bounceFromBelowVariants } from '@utils/animations';

const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    `;

const BounceFromBelowVariants = bounceFromBelowVariants(0.2);

interface ProjectsState {
    projects: Array<{ name: string, description: string, image: string, url: string }>,
    loaded: boolean,
    error: boolean
}

export default class Projects extends Component<{}, ProjectsState> {
    state: ProjectsState = {
        projects: [],
        loaded: false,
        error: false
    }

    componentDidMount() {
        fetch("/data/projectsInfo.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load projects info: ${response.status}`);
            }
            return response.json();
        })
        .then(projInfo => {
            this.setState({
                projects: projInfo,
                loaded: true
            })
        })
        .catch(err => {
            console.error(err);
            this.setState({ error: true });
        })
    }

    renderContent() {
        if (this.state.error) {
            return <LoadError message="Sorry, my projects couldn't be loaded right now. Please try again later."/>;
        }
        if (!this.state.loaded) {
            return <LoadingPage/>;
        }
        return (
            <>
            <BasicText fontCol={colours.white} fontSize='1.5rem' padding='4.5rem 2rem 2rem 2rem' fontWeight='300' letterSpacing='2px' display='flex'>
                Some of my favourite content and projects that I have worked on, click on one to find out more!
            </BasicText>
            <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={BounceFromBelowVariants}
                    >
                <Cards>
                    {this.state.projects.map((proj) => <ProjectCard key={proj.url} proj={proj}/>)}
                </Cards>
            </motion.div>
            </>
        );
    }

    render() {
      return (
        <Background backgroundCol={colours.black}>
            {this.renderContent()}
        </Background>
      );
    }
  };
