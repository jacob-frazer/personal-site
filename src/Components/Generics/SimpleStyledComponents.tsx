import styled from 'styled-components';
import colours from '@utils/colours';


export const Background = styled.div<{ backgroundCol: string, height?: string, backgroundGradient?:string }>`
    background-color: ${props => props.backgroundCol};
    height: ${props => props.height};
    z-index: 10;
    position: relative;

    ${props => props.backgroundGradient && `
        background:linear-gradient(${props.backgroundCol}, ${props.backgroundGradient})
    `}
    `;

export const BasicText = styled.div<{ 
    fontCol: string,
    fontSize: string,
    padding: string, 
    fontWeight: string,
    letterSpacing: string,
    width?: string,
    display?: string;
    float?: string;
    }>`
    color: ${props => props.fontCol};
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    font-weight: ${props => props.fontWeight};
    letter-spacing: ${props => props.letterSpacing};
    width: ${props => props.width};
    display: ${props => props.display};
    float: ${props => props.float};
    `;

export const LoadingPage = styled.div`
    height: 100vh;
    background-color: ${colours.black};
    `;