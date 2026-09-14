import { Component } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import ProjectCard from "@projects/ProjectCard";
import LoadError from "@generics/LoadError";
import { Background, LoadingPage } from "@generics/SimpleStyledComponents";

import colours from "@utils/colours";
import { DEVICE_WIDTHS } from "@utils/constants";
import { bounceFromBelowVariants } from "@utils/animations";

const PageHeader = styled.header`
  max-width: 60rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  color: ${colours.white};
`;

// softened from pure white, which reads heavy on the black background
const PageIntro = styled.p`
  max-width: 50ch;
  margin: 0.75rem auto 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);

  @media ${DEVICE_WIDTHS.tablet} {
    font-size: 1.2rem;
  }
`;

// rows wrap and centre, so a part filled last row sits in the middle rather than hanging left
const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0 0.5rem;
  max-width: 1400px;
`;

const SectionHeading = styled.h2`
  color: ${colours.white};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
  padding: 3rem 1rem 0.5rem 1rem;
`;

const SectionSubheading = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  margin: 0;
  padding: 0 1rem 1rem 1rem;
`;

const ProjectsWrapper = styled.div`
  padding-bottom: 3rem;
`;

const BounceFromBelowVariants = bounceFromBelowVariants(0.2);

interface ProjectSummary {
  name: string;
  description: string;
  image: string;
  url: string;
  earlier?: boolean;
}

interface ProjectsState {
  projects: Array<ProjectSummary>;
  loaded: boolean;
  error: boolean;
}

export default class Projects extends Component<{}, ProjectsState> {
  state: ProjectsState = {
    projects: [],
    loaded: false,
    error: false,
  };

  componentDidMount() {
    fetch("/data/projectsInfo.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load projects info: ${response.status}`);
        }
        return response.json();
      })
      .then((projInfo) => {
        this.setState({
          projects: projInfo,
          loaded: true,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  renderContent() {
    if (this.state.error) {
      return (
        <LoadError message="Sorry, my projects couldn't be loaded right now. Please try again later." />
      );
    }
    if (!this.state.loaded) {
      return <LoadingPage />;
    }

    const mainProjects = this.state.projects.filter((proj) => !proj.earlier);
    const earlierProjects = this.state.projects.filter((proj) => proj.earlier);

    return (
      <ProjectsWrapper>
        <PageHeader>
          <PageIntro>
            A selection of the work I'm most proud of, from AI research
            infrastructure to the UK's COVID-19 response. Choose a project for
            the full deep dive.
          </PageIntro>
        </PageHeader>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={BounceFromBelowVariants}
        >
          <Cards>
            {mainProjects.map((proj) => (
              <ProjectCard key={proj.url} proj={proj} />
            ))}
          </Cards>
        </motion.div>
        {earlierProjects.length > 0 && (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={BounceFromBelowVariants}
          >
            <SectionHeading>Earlier work</SectionHeading>
            <SectionSubheading>
              Personal projects exploring machine learning and big data
            </SectionSubheading>
            <Cards>
              {earlierProjects.map((proj) => (
                <ProjectCard key={proj.url} proj={proj} />
              ))}
            </Cards>
          </motion.div>
        )}
      </ProjectsWrapper>
    );
  }

  render() {
    return (
      <Background backgroundCol={colours.black}>
        {this.renderContent()}
      </Background>
    );
  }
}
