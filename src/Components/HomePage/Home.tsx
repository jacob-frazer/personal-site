import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion } from "framer-motion";

import SkillsPage from '@home/Skills';
import Connections from '@generics/Connections';
import ParticlesBG from '@generics/ParticlesBackground';

import colours from '@utils/colours';
import mePhoto from '@images/me.png';


const slideInLeft = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
`;

const slideInRight = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
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
  background-color: ${colours.black};
`;

const Text3 = styled(motion.div)`
  padding-top: 1.8rem;
  padding-bottom: 3rem;
  font-size: 3rem;
  color: white;
  position: relative;
  z-index: 1000;
`;

const InfoDiv = styled.div`
  padding-top: 2rem;
  font-size: 1.5rem;
  height: 30rem;
  background-color: ${colours.mid};
  color: black;
  z-index: 10;
  position: relative;
  opacity: 90%;
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
  z-index: 1000;
  width: 20rem;
  aspect-ratio: 1/0.95;
  padding: 2rem;
  `;

const Footer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 5rem;
  color: white;
  position: relative;
  z-index: 10;
  padding: 2rem;
  `;

// variant defines animations
const infoHeaderVariant = {
  visible: { opacity: 1, transition: {duration:2} },
  hidden: { opacity: 0 },
}

const infoBodyVariant = {
  visible: { opacity: 1, transition: {duration:3, delay:1} },
  hidden: { opacity: 0 },
}

const photoVariant = {
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
    <Connections colour="dark"/>
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
        <Photo 
          src={mePhoto}
          variants={photoVariant}
          className="photo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <Text3
        animate={{ opacity: 1, transition: {duration:2, delay:2} }}
        initial={{ opacity: 0 }}
        >
          Data Specialist and Software Developer
        </Text3>
      </TextContainer>
      <InfoDiv> 
        <InfoText/>
      </InfoDiv>
      <SkillsPage/>
      <Footer>
        <Connections colour="light"/>
      </Footer>
    </>
  )
}