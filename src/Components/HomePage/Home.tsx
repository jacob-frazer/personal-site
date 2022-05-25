import styled from 'styled-components';

import IntroSection from '@home/IntroSection';
import SkillSection from '@home/Skills';
import TopSection from '@home/TopSection';
import Connections from '@generics/Connections';
import ParticlesBG from '@generics/ParticlesBackground';
import { Background } from '@generics/SimpleStyledComponents';


  // change this to a background
const Footer = styled(Background)`
  padding: 2rem;
  `;


export default function HomePage() {
  return(
    <>
      <ParticlesBG/>
      <TopSection/>
      <IntroSection/>
      <SkillSection/>
      <Footer backgroundCol='transparent' height='5rem'>
        <Connections colour="light"/>
      </Footer>
    </>
  )
}