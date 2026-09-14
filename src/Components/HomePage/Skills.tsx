import React from 'react';

import styled from 'styled-components';
import { motion } from "framer-motion";

import { Background } from '@generics/SimpleStyledComponents';

import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';
import { bounceFromBelowVariants } from '@utils/animations';

const BounceFromBelowVariants = bounceFromBelowVariants();

const SKILL_SECTIONS = [
    {
        heading: "AI Engineering",
        points: [
            "Built the container platform several JP Morgan research teams use to run cutting edge AI research on GPUs",
            "Experienced building LLM powered applications, from prompt engineering and retrieval to agents and tool use",
            "Using AI tools since their inception, always working with the latest models and coding agents to ship software faster",
        ]
    },
    {
        heading: "Software Engineering",
        points: [
            "Production experience in Python and TypeScript / JavaScript across finance, government, insurance and telecoms",
            "Led a team of six developers to deliver the Magic Breakfast schools portal on time and under budget",
            "Take systems from greenfield design through to production, operation and eventual deprecation",
        ]
    },
    {
        heading: "Data Solutions",
        points: [
            "Built end-to-end data pipelines and infrastructure as code on AWS for the UK's COVID-19 response",
            "Put NLP and reasoning systems into production, automating insurance pricing and saving over £10M",
            "Big data and security analytics with Apache Spark in BT's cyber security Data Science Hub",
        ]
    },
    {
        heading: "Web Development",
        points: [
            "Full stack development with React, TypeScript and Node.js",
            "Delivered web applications from a charity schools portal to a secure enterprise file platform",
            "Worked on extensions for JP Morgan's internal Jupyter platform, used by thousands of researchers",
        ]
    },
];

// compact grid of cards: one column on phones, two from tablet width upwards
const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem 4rem 1rem;

    @media ${DEVICE_WIDTHS.tablet} {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 3rem 2rem 5rem 2rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        max-width: 1800px;
      }
    `;

const SkillCard = styled(motion.div)`
    background-color: rgba(8, 14, 20, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: left;
    color: ${colours.white};

    @media ${DEVICE_WIDTHS.laptop} {
        padding: 2rem;
      }
    `;

const SkillHeading = styled.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.3rem;
    font-weight: 600;

    @media ${DEVICE_WIDTHS.laptop} {
        font-size: 1.5rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 2rem;
      }
    `;

const SkillList = styled.ul`
    margin: 0;
    padding-left: 1.2rem;
    `;

const SkillPoint = styled.li`
    font-size: 1rem;
    line-height: 1.6;
    padding-top: 0.5rem;

    @media ${DEVICE_WIDTHS.laptop} {
        font-size: 1.1rem;
      }
    @media ${DEVICE_WIDTHS.desktop} {
        font-size: 1.5rem;
      }
    `;


class Skills extends React.Component {
    render() {
        return (
                <Background backgroundCol="transparent">
                    <SkillGrid>
                        {SKILL_SECTIONS.map((section) => (
                            <SkillCard
                                key={section.heading}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={BounceFromBelowVariants}
                                >
                                <SkillHeading>{section.heading}</SkillHeading>
                                <SkillList>
                                    {section.points.map((point) => <SkillPoint key={point}>{point}</SkillPoint>)}
                                </SkillList>
                            </SkillCard>
                        ))}
                    </SkillGrid>
                </Background>
        )
    }
}

export default Skills;
