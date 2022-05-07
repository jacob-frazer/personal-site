import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// image files
//import blockchain from '../images/blockchain_technology.webp';
import blockchain from '../images/blockchain1.jpg';
import ai from '../images/ai.jpg';
import tech from '../images/high_tech.jpeg';


const fadeIn = keyframes`
{
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
}`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  padding-top: 4.5rem;
  align-items: center;
  justify-content: centre;
`;

const Images = styled.img<{ fadeInTime: string }>`
  display: flex;
  padding: 35px;
  width: 750px;
  width: 30%;
  flex-basis: 33.3%;
  animation-name: ${fadeIn};
  animation-duration: ${p => (p.fadeInTime)};
`;


const ImageContainer = () => {
  return (
      <ImageBox>
        <Images alt="blockchain" fadeInTime="4s" src={blockchain}/>
        <Images alt="ai" fadeInTime="6s" src={ai}/>
        <Images alt="tech" fadeInTime="8s" src={tech}/>
      </ImageBox>
  ); 
};

export default ImageContainer;