import { motion, Variants } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import Connections from '@generics/Connections';
import { Background, BasicText } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';

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


const AboutText = styled(BasicText)`
  text-align: left;

  @media ${DEVICE_WIDTHS.mobileS} {
    font-size: 1rem;
    width: 75%;
  }
  @media ${DEVICE_WIDTHS.tablet} {
    font-size: 1.5rem;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    width: 58%;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    font-size: 2rem;
  }
  `;

const AboutHeader = styled(BasicText)`
  @media ${DEVICE_WIDTHS.mobileS} {
    font-size: 2.5rem;
  }
  @media ${DEVICE_WIDTHS.tablet} {
    font-size: 3.5rem;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    font-size: 4rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    font-size: 5rem;
  }
  `;

const Div = styled(motion.div)`
  padding-top: 4rem;
  `;


class AboutPage extends React.Component{
    render(){
      return(
        <>
        <Background backgroundCol={colours.black} height="100vh">
          <Div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={BounceFromBelowVariants}
            >
          <AboutHeader fontCol={colours.white} fontSize='1rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='75%' display='float' float='left'>
            Who am I?
          </AboutHeader>

          <AboutText fontCol={colours.white} fontSize='0.5rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            Hey, I am Jacob, a software developer and data specialist who enjoys solving interesting business problems
          </AboutText>
          <AboutText fontCol={colours.white} fontSize='0.5rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            I live in London and I love to code (I even do it on the weekends)
          </AboutText>
          <AboutText fontCol={colours.white} fontSize='0.5rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            In my free time I like to learn - doesn't matter what, as long as it's stimulating!
          </AboutText>
          </Div>
          <Connections colour='light' padding='0'/>
        </Background>
        </>
      )
    }
  }

export default AboutPage