import styled from 'styled-components';
import { motion } from "framer-motion";

import { BasicText } from '@generics/SimpleStyledComponents';

import mePhoto from '@images/me.png';
import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';

const Text = styled(motion(BasicText))<{ fontStyle?: string, }>`
  z-index: 10000;
  position: relative;
  font-style: ${props => props.fontStyle};
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
  padding: 0.5rem;
  width: 5rem;

  @media ${DEVICE_WIDTHS.tablet} {
    padding: 1rem;
    width: 10rem;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    padding: 2rem;
    width: 15rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    padding: 2rem;
    width: 20rem;
  }
  `;

export default function Top() {
    return (
        <TopSection>
            <Text fontCol={colours.white} fontSize="3rem" fontStyle="italic" fontWeight='300' padding="5rem 0 0 0" letterSpacing='2px'
            animate={{ x:0, opacity:1, transition: {duration:1} }}
            initial={{ x: 1000, opacity:0.25 }}
            >
            This is
            </Text>
            <Text fontCol={colours.white} fontSize="5rem" fontWeight='bold' padding='' letterSpacing=''
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
            fontCol={colours.white} fontSize="3rem" fontWeight='400' padding='1.8 3 0 0' letterSpacing=''
            animate={{ opacity: 1, transition: {duration:2, delay:1} }}
            initial={{ opacity: 0 }}
            >
            Data Specialist and Software Developer
            </Text>
        </TopSection>
    )
}