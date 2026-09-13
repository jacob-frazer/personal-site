import styled from 'styled-components';
import { motion, Variants } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import Connections from '@generics/Connections';
import TypeWriter from '@generics/Typewriter';

import mePhoto from '@images/me_smaller.webp';
import colours from '@utils/colours';
import { DEVICE_WIDTHS, HERO_TYPEWRITER_LIST } from '@utils/constants';

// fills the first screen below the nav bar so the splash reads as a single view
const Hero = styled.section`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem 4rem 1.5rem;
  color: ${colours.white};
  `;

// photo above the text on phones, text on the left and photo on the right from laptop width
const HeroInner = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media ${DEVICE_WIDTHS.laptop} {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 4rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    max-width: 1800px;
  }
  `;

const Photo = styled(motion.img)`
  width: 50%;
  max-width: 220px;
  height: auto;

  @media ${DEVICE_WIDTHS.tablet} {
    max-width: 280px;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    width: 36%;
    max-width: 440px;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    max-width: 640px;
  }
  `;

const HeroText = styled(motion.div)`
  flex: 1;
  text-align: center;

  @media ${DEVICE_WIDTHS.laptop} {
    text-align: left;
  }
  `;

const Greeting = styled(motion.p)`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
  color: ${colours.lightgrey};

  @media ${DEVICE_WIDTHS.laptop} {
    font-size: 1.5rem;
  }
  `;

const Name = styled(motion.h1)`
  margin: 0.25rem 0 0.5rem 0;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.1;

  @media ${DEVICE_WIDTHS.tablet} {
    font-size: 3.75rem;
  }
  @media ${DEVICE_WIDTHS.laptop} {
    font-size: 4.5rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    font-size: 6.5rem;
  }
  `;

const Role = styled(motion.p)`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 600;
  color: ${colours.mid};

  @media ${DEVICE_WIDTHS.laptop} {
    font-size: 1.9rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    font-size: 2.5rem;
  }
  `;

// reserves room for two lines on phones so the layout doesn't jump when a typed phrase wraps
const TypewriterLine = styled(motion.p)`
  margin: 1.25rem 0 0 0;
  min-height: 3.2em;
  font-size: 1.25rem;
  line-height: 1.6;

  strong {
    font-weight: 600;
    color: ${colours.white};
  }

  @media ${DEVICE_WIDTHS.laptop} {
    min-height: 1.6em;
    font-size: 1.6rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    font-size: 2rem;
  }
  `;

const Bio = styled(motion.p)`
  max-width: 36rem;
  margin: 1rem auto 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${colours.lightgrey};

  @media ${DEVICE_WIDTHS.laptop} {
    margin-left: 0;
    font-size: 1.2rem;
  }
  @media ${DEVICE_WIDTHS.desktop} {
    max-width: 50rem;
    font-size: 1.6rem;
  }
  `;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;

  @media ${DEVICE_WIDTHS.laptop} {
    justify-content: flex-start;
  }
  `;

const buttonBase = `
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s;
  `;

const PrimaryButton = styled(Link)`
  ${buttonBase}
  color: ${colours.black};
  background-color: ${colours.mid};
  border: 1px solid ${colours.mid};

  &:hover,
  &:focus {
    background-color: ${colours.white};
    border-color: ${colours.white};
  }
  `;

const SecondaryButton = styled.a`
  ${buttonBase}
  color: ${colours.white};
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    border-color: ${colours.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
  `;

// the shared icon row is centred and padded by default, so tighten it and line it up with the text on wider screens
const Socials = styled(motion.div)`
  margin-top: 1rem;

  & > div {
    padding: 0;
    gap: 0.5rem;
  }

  @media ${DEVICE_WIDTHS.laptop} {
    margin-left: -1rem;

    & > div {
      justify-content: flex-start;
    }
  }
  `;

const ScrollCue = styled(motion.a)`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin-left: -1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover,
  &:focus {
    color: ${colours.white};
  }
  `;

// text lines fade up one after another once the page loads
const textVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Top() {
    return (
        <Hero>
            <HeroInner>
                <Photo
                    src={mePhoto}
                    alt="Headshot of Jacob"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
                    />
                <HeroText variants={textVariants} initial="hidden" animate="visible">
                    <Greeting variants={itemVariants}>Hi, I am</Greeting>
                    <Name variants={itemVariants}>Jacob Frazer</Name>
                    <Role variants={itemVariants}>AI & Software Engineer</Role>
                    <TypewriterLine variants={itemVariants}>
                        I build <strong><TypeWriter strings={HERO_TYPEWRITER_LIST} shuffle={false}/></strong>
                    </TypewriterLine>
                    <Bio variants={itemVariants}>
                        A London based software engineer at JP Morgan, building the platforms researchers rely on for quantitative and AI research.
                        I've used AI tools since their inception and use AI coding agents every day to ship faster.
                    </Bio>
                    <Actions variants={itemVariants}>
                        <PrimaryButton to="/projects">View my projects</PrimaryButton>
                        <SecondaryButton href="mailto:jacob.frazer@hotmail.com">Get in touch</SecondaryButton>
                    </Actions>
                    <Socials variants={itemVariants}>
                        <Connections/>
                    </Socials>
                </HeroText>
            </HeroInner>
            <ScrollCue
                href="#experience"
                aria-label="Scroll to experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ opacity: { delay: 1.5, duration: 0.6 }, y: { delay: 1.5, duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
                >
                <FaChevronDown aria-hidden="true"/>
            </ScrollCue>
        </Hero>
    )
}
