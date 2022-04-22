import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

import ImageContainer from './ImageContainer';

const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Animation1 = styled.div`
font-style: italic;
font-size: 50px;
padding-top: 100px; 
animation-name: ${slideInLeft};
animation-duration: 2s;`;

const Animation2 = styled.div`
font-weight: bold;
font-size: 82px;
animation-name: ${slideInRight};
animation-duration: 2s;`;

class HomePage extends React.Component{
    render(){
      return(
        <>
          <Animation1>This is</Animation1>
          <Animation2>Cob Technologies</Animation2>
          <ImageContainer/>
        </>
      )
    }
  }

export default HomePage;