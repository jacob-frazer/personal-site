import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

import colours from '@utils/colours';
import { DEVICE_WIDTHS } from '@utils/constants';

import { Background, BasicText } from '@generics/SimpleStyledComponents';

const RobotImage = styled.img`
    filter: brightness(0) invert(1);
    display: flex;
    float: right;
    padding: 3rem;
    width: 150px;

    @media ${DEVICE_WIDTHS.tablet} {
        width: 350px;
      }

    @media ${DEVICE_WIDTHS.laptop} {
        width: auto;
      }
    `;

const Return404 = styled(Link)`
    color: ${colours.white};
    font-size: 1.5rem;
    padding: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-decoration: none;
    border: 1px solid white;
    `;

class NotFound extends React.Component<{projects?:boolean}>{
    render(){
      return(
        <>
            <Background backgroundCol={colours.black} height="100vh">
                <RobotImage src="/images/404/broken-robot.png"/>
                <BasicText fontCol={colours.white} fontSize='4rem' padding='4rem' fontWeight='500' letterSpacing='2px'>404.</BasicText>
                {
                    this.props.projects ? 
                    <BasicText fontCol={colours.white} fontSize='1.5rem' padding='5rem' fontWeight='400' letterSpacing='2px'>
                        Sorry, I haven't worked on a project with that name. Maybe one day!
                    </BasicText>
                    :
                    <BasicText fontCol={colours.white} fontSize='1.5rem' padding='5rem' fontWeight='400' letterSpacing='2px'>
                        Sorry, that page doesn't exist.
                    </BasicText>
                }
                <Return404 to="/">Take me back <strong>home</strong></Return404>
                
            </Background>
        </>
      )
    }
  }

export default NotFound