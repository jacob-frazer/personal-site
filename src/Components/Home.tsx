import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

import ImageContainer from './ImageContainer';

const slideInLeft = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
`;

const slideInRight = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

const zoomInText = keyframes`
  0% {
    transform: scale(0.94);
    opacity: 0;
  }
  80% {
    transform: scale(0.94);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInSpan = keyframes`
  0% {filter: blur(4px);}
  80% {filter: blur(4px);}
  100% {filter: blur(0px);}
`;

const Text1 = styled.div`
font-style: italic;
font-size: 50px;
padding-top: 200px; 
animation-name: ${slideInLeft};
animation-duration: 2s;`;

const Text2 = styled.div`
font-weight: bold;
font-size: 82px;
animation-name: ${slideInRight};
animation-duration: 2s;`;

const Text3 = styled.div`
padding-top: 30px;
padding-bottom: 60px;
font-size: 60px;
animation-name: ${zoomInText};
animation-duration: 6s;`;

const FadeInSpan = styled.span<{ fadeInTime: string }>`
animation-name: ${fadeInSpan};
animation-duration: ${p => (p.fadeInTime)};`;

const InfoDiv = styled.div`
padding-top: 10px;
font-size: 60px;
height: 300px;
background-color: rgb(${colours.light});
color: black;
`;

class HomePage extends React.Component{
    render(){
      return(
        <>
          <Text1>This is</Text1>
          <Text2>Cob Technologies</Text2>
          <ImageContainer/>
          <Text3>
              <FadeInSpan fadeInTime='7s'>Greatness </FadeInSpan>
              <FadeInSpan fadeInTime='7.4s'>Happens </FadeInSpan>
              <FadeInSpan fadeInTime='7.8s'>Here</FadeInSpan>
          </Text3>
          <InfoDiv> </InfoDiv>
        </>
      )
    }
  }

export default HomePage;