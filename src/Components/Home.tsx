import React from 'react';
import { useEffect } from "react";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion, useAnimation } from "framer-motion";

import colours from '../utils/colours';
import ImageContainer from './ImageContainer';
import ParticlesBG from './ParticlesBackground';

import SkillsPage from './Skills';
import mePhoto from '../images/me.png';

const slideInLeft = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
`;

const slideInRight = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

const zoomInText = keyframes`
  0% {
    transform: scale(0.94);
    opacity: 0;
  }
  80% {
    transform: scale(0.94);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInSpan = keyframes`
  0% {filter: blur(4px);}
  80% {filter: blur(4px);}
  100% {filter: blur(0px);}
`;

const Text1 = styled.div`
  font-style: italic;
  font-size: 3rem;
  padding-top: 5rem; 
  animation-name: ${slideInLeft};
  animation-duration: 2s;
  z-index: 10000;
  position: relative;
  color: white;
  `;

const Text2 = styled.div`
  font-weight: bold;
  font-size: 5rem;
  animation-name: ${slideInRight};
  animation-duration: 2s;
  z-index: 10000;
  position: relative;
  color: white;
`;

const TextContainer = styled.div`
  height: 96vh;
  overflow: auto;
`;

const Text3 = styled.div`
  padding-top: 1.8rem;
  padding-bottom: 3rem;
  font-size: 3rem;
  animation-name: ${zoomInText};
  animation-duration: 6s;
  color: white;
  z-index: 10;
  position: relative;
`;

const FadeInSpan = styled.span<{ fadeInTime: string }>`
  animation-name: ${fadeInSpan};
  animation-duration: ${p => (p.fadeInTime)};
  `;

const InfoDiv = styled.div`
  padding-top: 2rem;
  font-size: 1.5rem;
  height: 30rem;
  background-color: ${colours.mid};
  color: black;
  z-index: 10;
  position: relative;
  `;

const InfoHeading = styled(motion.div)`
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 2rem;
  `;

const InfoBody = styled(motion.div)`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 1rem;
  `;

const Photo = styled(motion.img)`
  position: relative;
  z-index: 10;
  width: 20rem;
  aspect-ratio: 1/1;
  padding: 2rem;
  `;

// variant defines animations
const infoHeaderVariant = {
  visible: { opacity: 1, transition: {duration:3} },
  hidden: { opacity: 0 },
}

const infoBodyVariant = {
  visible: { opacity: 1, transition: {duration:3, delay:1} },
  hidden: { opacity: 0 },
}

const InfoText = () => {
  return (
    <>
    <InfoHeading 
    variants={infoHeaderVariant}
    className="infoHeader"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
      <div>Welcome</div>
    </InfoHeading>

    <InfoBody
    variants={infoBodyVariant}
    className="infoHeader"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
    I am Jacob, a technical professional based out of London with a passion for Data and Software Engineering. 
    I created this portfolio as a place for me to detail the projects I have worked on, technologies I know, and articles I have written. 
    <div><br/></div>
    Let's connect 
    </InfoBody>
    </>
  );
};

export default function HomePage() {
  return(
    <>
      <ParticlesBG/>
      <TextContainer>
        <Text1>This is</Text1>
        <Text2>Jacob Frazer</Text2>
        <Photo src={mePhoto}/>
      </TextContainer>
      <InfoDiv> 
        <InfoText/>
      </InfoDiv>
      <SkillsPage/>
    </>
  )
}