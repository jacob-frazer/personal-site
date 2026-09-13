import styled from "styled-components";
import { motion } from "framer-motion";

import Connections from "@generics/Connections";
import colours from "@utils/colours";
import { DEVICE_WIDTHS } from "@utils/constants";

// solid background so the particles don't show through and reduce contrast
const InfoDiv = styled.div`
padding-top: 2rem;
padding-bottom: 1rem;
font-size: 1.5rem;
background-color: ${colours.mid};
color: ${colours.black};
z-index: 10;
position: relative;
`;

const InfoHeading = styled(motion.div)`
font-size: 1.4rem;
font-weight: 600;
padding: 1rem;

@media ${DEVICE_WIDTHS.tablet} {
  padding: 1rem;
  font-size: 1.5rem;
}
@media ${DEVICE_WIDTHS.laptop} {
  padding: 1.5rem;
  font-size: 1.75rem;
}
@media ${DEVICE_WIDTHS.desktop} {
  padding: 2rem;
  font-size: 2.2rem;
}
`;

const InfoBody = styled(motion.div)`
font-size: 1rem;
font-weight: 400;
line-height: 1.6;
max-width: 60rem;
margin: 0 auto;
padding: 1rem 2rem 2rem 2rem;

@media ${DEVICE_WIDTHS.tablet} {
  font-size: 1.15rem;
}
@media ${DEVICE_WIDTHS.laptop} {
  font-size: 1.3rem;
}
@media ${DEVICE_WIDTHS.desktop} {
  font-size: 1.6rem;
  max-width: 80rem;
}
`;

// variant defines animations
const infoHeaderVariant = {
    visible: { opacity: 1, transition: {duration:1} },
    hidden: { opacity: 0 },
  }

const infoBodyVariant = {
    visible: { opacity: 1, transition: {duration:1.5, delay:0.5} },
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
        I am Jacob, a London based Software Engineer at JP Morgan, where I build the platforms researchers rely on for quantitative and AI research.
        I also build LLM powered applications and use AI coding agents every day to ship faster. This site showcases some of the projects I am most proud of.
        <div><br/></div>
        Let's connect
        <Connections darkMode={true}/>
        </InfoBody>
      </InfoDiv>
    );
  };

export default IntroSection
