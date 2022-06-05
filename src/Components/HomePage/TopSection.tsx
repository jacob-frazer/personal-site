import styled from 'styled-components';
import { motion } from "framer-motion";

import { BasicText } from '@generics/SimpleStyledComponents';

import mePhoto from '@images/me.png';
import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';

const Text = styled(motion(BasicText))<{ fontStyle?: string, mediaStylesFontSize: Array<string>}>`
  z-index: 10000;
  position: relative;
  font-style: ${props => props.fontStyle};

  @media ${DEVICE_WIDTHS.tablet} {
    font-size: ${props => props.mediaStylesFontSize[0]}
  }
  @media ${DEVICE_WIDTHS.laptop} {
    font-size: ${props => props.mediaStylesFontSize[1]}
  }
  `;

const TopSection = styled.div`
  height: 96vh;
  overflow: auto;
  background-color: ${colours.black};
  `;

const Photo = styled(motion.img)`
  position: relative;
  z-index: 1000;
  aspect-ratio: 1/0.95;
  padding: 2rem;
  width: 50%;

  @media ${DEVICE_WIDTHS.tablet} {
    padding: 1rem;
    width: 30%;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    padding: 2rem;
    width 25%;
  }
  `;

export default function Top() {
    return (
        <TopSection>
            <Text fontCol={colours.white} fontSize="1.5rem" fontStyle="italic" fontWeight='300' padding="5rem 0 0 0" letterSpacing='2px'
            mediaStylesFontSize={['2rem', '3rem']}
            animate={{ x:0, opacity:1, transition: {duration:1} }}
            initial={{ x: 1000, opacity:0.25 }}
            >
            This is
            </Text>
            <Text fontCol={colours.white} fontSize="2.8rem" fontWeight='bold' padding='' letterSpacing=''
            mediaStylesFontSize={['3.5rem', '5rem']}
            animate={{ x:0, opacity:1, transition: {duration:1} }}
            initial={{ x: -1000, opacity:0.25 }}
            >
            Jacob Frazer
            </Text>
            <Photo 
            src={mePhoto}
            className="photo"
            animate={{ opacity: 1, transition: {duration:2, delay:1} }}
            initial={{ opacity: 0 }}
            />
            <Text
            fontCol={colours.white} fontSize="1.8rem" fontWeight='400' padding='1rem 0 1rem 1rem' letterSpacing=''
            mediaStylesFontSize={['2rem', '3rem']}
            animate={{ opacity: 1, transition: {duration:2, delay:1} }}
            initial={{ opacity: 0 }}
            >
            Data Specialist and Software Developer
            </Text>
        </TopSection>
    )
}