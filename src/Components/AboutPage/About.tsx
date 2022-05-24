import { motion, Variants } from 'framer-motion';
import React from 'react';

import Connections from '@generics/Connections';
import { Background, BasicText } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';

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

class AboutPage extends React.Component{
    render(){
      return(
        <>
        <Background backgroundCol={colours.black} height="93vh">
          <motion.div
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 25, bottom: 25 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={BounceFromBelowVariants}
            >
          <BasicText fontCol={colours.white} fontSize='5rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='75%' display='float' float='left'>
            Who am I?
          </BasicText>

          <BasicText fontCol={colours.white} fontSize='2rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            Hey, I am Jacob, a software developer and data specialist who enjoys solving interesting business problems
          </BasicText>
          <BasicText fontCol={colours.white} fontSize='2rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            I live in London and I love to code (I even do it on the weekends)
          </BasicText>
          <BasicText fontCol={colours.white} fontSize='2rem' padding='2rem' fontWeight='300' letterSpacing='2px' width='58%'>
            In my free time I like to learn - doesn't matter what, as long as it's stimulating!
          </BasicText>
          </motion.div>
          <Connections colour='light' padding="10rem 0 0 0"/>
        </Background>
        </>
      )
    }
  }

export default AboutPage