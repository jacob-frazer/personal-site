import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Background } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';
import { EXPERIENCE } from '@utils/experience';
import { bounceFromBelowVariants } from '@utils/animations';

const BounceFromBelowVariants = bounceFromBelowVariants();

// scroll-margin keeps the first entry clear of the sticky nav when jumped to from the splash
const Section = styled.section`
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem 1rem 1rem;
    scroll-margin-top: 4.5rem;
    color: ${colours.white};

    @media ${DEVICE_WIDTHS.desktop} {
        max-width: 1400px;
      }
    `;

// the list's left border is the timeline, each entry places a dot on it
const Entries = styled.ol`
    list-style: none;
    margin: 0 0 0 0.5rem;
    padding: 0 0 0 2rem;
    text-align: left;
    border-left: 2px solid rgba(255, 255, 255, 0.25);
    `;

const Entry = styled(motion.li)`
    position: relative;
    background-color: rgba(8, 14, 20, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;

    &::before {
        content: "";
        position: absolute;
        left: calc(-2rem - 8px);
        top: 1.6rem;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${colours.mid};
        box-shadow: 0 0 0 4px ${colours.black};
    }
    `;

const EntryHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.25rem 1rem;
    `;

const Company = styled.h3`
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;

    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.75rem;
      }
    `;

const Years = styled.span`
    color: ${colours.mid};
    font-size: 1rem;
    font-weight: 600;
    `;

const Detail = styled.div`
    color: ${colours.lightgrey};
    font-size: 0.95rem;
    padding-top: 0.25rem;
    `;

const Summary = styled.p`
    margin: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.6;

    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.4rem;
      }
    `;

const ProjectLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    `;

const ProjectLink = styled(Link)`
    color: ${colours.white};
    font-size: 0.9rem;
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 999px;
    transition: background-color 0.2s, color 0.2s;

    &:hover,
    &:focus {
        background-color: ${colours.mid};
        color: ${colours.black};
    }
    `;

const Timeline = () => {
    return (
        <Background backgroundCol="transparent">
            <Section id="experience" aria-label="Experience">
                <Entries>
                    {EXPERIENCE.map((role) => (
                        <Entry
                            key={role.company}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={BounceFromBelowVariants}
                            >
                            <EntryHeader>
                                <Company>{role.company}</Company>
                                <Years>{role.years}</Years>
                            </EntryHeader>
                            {role.detail && <Detail>{role.detail}</Detail>}
                            <Summary>{role.summary}</Summary>
                            <ProjectLinks>
                                {role.projects.map((project) => (
                                    <ProjectLink key={project.url} to={`/projects/${project.url}`}>{project.label}</ProjectLink>
                                ))}
                            </ProjectLinks>
                        </Entry>
                    ))}
                </Entries>
            </Section>
        </Background>
    );
};

export default Timeline;
