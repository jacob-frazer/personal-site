import styled from "styled-components";
import { motion } from "framer-motion";

import Connections from "@generics/Connections";
import colours from "@utils/colours";

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

// variant defines animations
const infoHeaderVariant = {
    visible: { opacity: 1, transition: {duration:2} },
    hidden: { opacity: 0 },
  }
  
const infoBodyVariant = {
    visible: { opacity: 1, transition: {duration:3, delay:1} },
    hidden: { opacity: 0 },
  }

const IntroSection = () => {
    return (
      <InfoDiv>
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
      </InfoDiv>
    );
  };

export default IntroSection