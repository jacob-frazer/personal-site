import React, { Component } from 'react';

import styled from 'styled-components';
import { motion, Variants} from 'framer-motion';

import colours from '../utils/colours';
import projects from "../data/projects.json";

import ProjectCard from './ProjectCard';

const TextBox = styled.div`
    color: ${colours.white};
    align: left;
    display: flex;
    padding: 30px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 2px;
    `;

const Background = styled.div`
    background-color: ${colours.black};
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
    public render() {
      // call to db (json) to get info about the various projects + picture
  
      // this will pass into project box item to display nicely but for now just info into div
      const ProjList: any = () => projects.map((proj) => <ProjectCard proj={proj}/>);
      return (
        <Background>
            <TextBox>Some of my favourite content and projects that I have worked on, click on one to find out more!</TextBox>
            <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={BounceFromBelowVariants}
                    >
                <Cards>
                    <ProjList/>
                </Cards>
            </motion.div>
        </Background>
      );
    }
  };