import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';
import { Background } from '@generics/SimpleStyledComponents';

// body copy is softened from pure white, which reads heavy on a black background
const BODY_TEXT = 'rgba(255, 255, 255, 0.78)';

const Page = styled.article`
    box-sizing: border-box;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem 1.25rem;
    text-align: left;
    color: ${colours.white};

    @media ${DEVICE_WIDTHS.tablet} {
        padding: 2.5rem 2rem 5rem 2rem;
    }
    @media ${DEVICE_WIDTHS.desktop} {
        max-width: 1500px;
    }
    `;

const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 2rem;
    color: ${BODY_TEXT};
    font-size: 0.95rem;
    text-decoration: none;

    &:hover,
    &:focus {
        color: ${colours.white};
        text-decoration: underline;
    }
    `;

// on wide screens the image sits beside the title at its natural shape, rather than as a cropped banner
const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
    align-items: center;

    @media ${DEVICE_WIDTHS.laptop} {
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
        gap: 3.5rem;
    }
    `;

const Eyebrow = styled.p`
    margin: 0 0 0.75rem 0;
    color: ${colours.mid};
    font-size: 0.95rem;
    font-weight: 600;

    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.2rem;
    }
    `;

const Headline = styled.h1`
    margin: 0;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 2.75rem;
    }
    @media ${DEVICE_WIDTHS.laptop} {
        font-size: 3.25rem;
    }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 4rem;
    }
    `;

const Intro = styled.p`
    max-width: 60ch;
    margin: 1rem 0 0 0;
    font-size: 1.1rem;
    line-height: 1.65;
    color: ${BODY_TEXT};

    @media ${DEVICE_WIDTHS.tablet} {
        font-size: 1.25rem;
    }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.5rem;
    }
    `;

const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1rem;
    `;

const SectionHeading = styled.h2`
    margin: 3rem 0 1.25rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.01em;

    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.8rem;
    }
    `;

const Outcomes = styled(motion.ul)`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;

    @media ${DEVICE_WIDTHS.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }
    `;

const Outcome = styled(motion.li)`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.04);
    font-size: 1rem;
    line-height: 1.55;
    color: ${BODY_TEXT};

    svg {
        flex: 0 0 auto;
        width: 1rem;
        height: 1rem;
        margin-top: 0.25rem;
        color: ${colours.mid};
    }

    a {
        color: ${colours.mid};
        word-break: break-all;
    }

    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.25rem;
    }
    `;

// technologies sit beside the write-up on wide screens and above it on phones
const Body = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
    margin-top: 3rem;

    @media ${DEVICE_WIDTHS.laptop} {
        grid-template-columns: minmax(0, 1fr) 18rem;
        gap: 4rem;
        align-items: start;
    }
    @media ${DEVICE_WIDTHS.desktop} {
        grid-template-columns: minmax(0, 1fr) 24rem;
    }
    `;

const Aside = styled.aside`
    @media ${DEVICE_WIDTHS.laptop} {
        grid-column: 2;
        grid-row: 1;
        position: sticky;
        top: 6rem;
    }
    `;

const AsideCard = styled.div`
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.03);
    `;

const AsideHeading = styled.h2`
    margin: 0 0 0.75rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${colours.lightgrey};
    `;

const TechnologiesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    `;

const TechnologiesListItem = styled.li`
    padding: 0.3rem 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 999px;
    font-size: 0.9rem;
    color: ${BODY_TEXT};
    `;

// capped at a comfortable reading width
const Prose = styled.div`
    max-width: 70ch;

    h2 {
        margin-top: 0;
    }

    p {
        margin: 0 0 1.25rem 0;
        font-size: 1.05rem;
        line-height: 1.8;
        color: ${BODY_TEXT};
    }

    @media ${DEVICE_WIDTHS.laptop} {
        grid-column: 1;
        grid-row: 1;
    }
    @media ${DEVICE_WIDTHS.desktop} {
        p {
            font-size: 1.25rem;
        }
    }
    `;

const PageFooter = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    `;

const FooterLink = styled(Link)<{ $alignRight?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-left: ${props => props.$alignRight ? 'auto' : '0'};
    text-align: ${props => props.$alignRight ? 'right' : 'left'};
    color: ${colours.white};
    text-decoration: none;

    span {
        font-size: 0.85rem;
        color: ${colours.lightgrey};
    }

    strong {
        font-size: 1.1rem;
        font-weight: 600;
    }

    &:hover strong,
    &:focus strong {
        color: ${colours.mid};
    }
    `;

const reveal: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerList: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

// turns any URLs in an outcome into links
const withLinks = (text: string) =>
    text.split(/(https?:\/\/\S+)/).map((part, i) =>
        /^https?:\/\//.test(part)
            ? <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
            : part
    );

type ProjectInfoProps = {
    projectInfo: { headline: string, intro: string, technologies: string[], explanation: string[], outcomes: string[] },
    image?: string,
    context?: string,
    next?: { name: string, url: string },
};

const ProjectInfo = ({ projectInfo, image, context, next }: ProjectInfoProps) => {
    const { headline, intro, technologies, explanation, outcomes } = projectInfo;
    return (
        <Background backgroundCol={colours.black}>
            <Page>
                <BackLink to="/projects">← All projects</BackLink>
                <HeaderGrid>
                    <motion.header variants={reveal} initial="hidden" animate="visible">
                        {context && <Eyebrow>{context}</Eyebrow>}
                        <Headline>{headline}</Headline>
                        <Intro>{intro}</Intro>
                    </motion.header>
                    {image && <ProjectImage src={image} alt=""/>}
                </HeaderGrid>

                <SectionHeading>Successes & outcomes</SectionHeading>
                <Outcomes variants={staggerList} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                    {outcomes.map((outcome: string, i: number) => (
                        <Outcome key={i} variants={reveal}>
                            <FaCheckCircle aria-hidden="true"/>
                            <span>{withLinks(outcome)}</span>
                        </Outcome>
                    ))}
                </Outcomes>

                <Body>
                    <Aside>
                        <AsideCard>
                            <AsideHeading>Technologies</AsideHeading>
                            <TechnologiesList>
                                {technologies.map((tech: string, i: number) => <TechnologiesListItem key={i}>{tech}</TechnologiesListItem>)}
                            </TechnologiesList>
                        </AsideCard>
                    </Aside>
                    <Prose>
                        <SectionHeading>Deep dive</SectionHeading>
                        {explanation.map((para: string, i: number) => <p key={i}>{para}</p>)}
                    </Prose>
                </Body>

                <PageFooter aria-label="Project navigation">
                    <FooterLink to="/projects">
                        <span>Back to</span>
                        <strong>All projects</strong>
                    </FooterLink>
                    {next &&
                        <FooterLink to={`/projects/${next.url}`} $alignRight>
                            <span>Next project</span>
                            <strong>{next.name} →</strong>
                        </FooterLink>
                    }
                </PageFooter>
            </Page>
        </Background>
    )
};

export default ProjectInfo;
