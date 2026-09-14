import styled from 'styled-components';

import SkillSection from '@home/Skills';
import TopSection from '@home/TopSection';
import Timeline from '@home/Timeline';
import Connections from '@generics/Connections';
import ParticlesBG from '@generics/ParticlesBackground';
import { Background, SectionDivider } from '@generics/SimpleStyledComponents';


  // change this to a background
const Footer = styled(Background)`
  padding: 2rem;
  `;


export default function HomePage() {
  return(
    <>
      <ParticlesBG/>
      <TopSection/>
      <SectionDivider aria-hidden="true"/>
      <Timeline/>
      <SectionDivider aria-hidden="true"/>
      <SkillSection/>
      <Footer backgroundCol='transparent' height='5rem'>
        <Connections/>
      </Footer>
    </>
  )
}
