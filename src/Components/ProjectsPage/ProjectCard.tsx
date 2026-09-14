import React from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import colours from '@utils/colours';

// border-box so the padding is included in the width and three cards fit a row exactly
const CardsItem = styled.li`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    @media(min-width: 40rem) {
        width: 50%;
    }
    @media(min-width: 56rem) {
        width: 33.333%;
    }
    `;

const CardImage = styled.div<{backgroundImage:string}>`
    background-image: url(${props => props.backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(85%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
    &::before {
        content: "";
        display: block;
        padding-top: 56.25%; // 16:9 aspect ratio
    }
    @media(min-width: 40rem) {
        &::before {
        padding-top: 66.6%; // 3:2 aspect ratio
        }
    }
    `;

const Card = styled.div`
    flex: 1 1 auto;
    background-color: ${colours.light};
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover {
        ${CardImage} {
        filter: contrast(100%);
        }
    }
    `;

const CardContent = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1.25rem;
    `;

const CardTitle = styled.h3`
    color: ${colours.black};
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.3;
    `;

const CardText = styled.p`
    flex: 1 1 auto;
    color: #333;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0.75rem 0 1.25rem 0;
    `;

const Button = styled.button`
    background-color: ${colours.light};
    border: 1px solid grey;
    color: black;
    font-family: inherit;
    font-size: 0.95rem;
    padding: 0.6rem;
    display: block;
    width: 100%;
    cursor: pointer;
    transition: 0.25s;
    &:hover,
    &:focus {
        color: white;
        background-color: ${colours.dark};
        border: 1px solid ${colours.dark};
    }
    `;

const ProjectCard = (props: {
    proj: { name: string; description: string, image: string, url: string },
    }) => {
    // redirect function to the more info page for projects
    let navigate = useNavigate();
    const { proj } = props;
    return (
                <CardsItem>
                    <Card>
                    <CardImage backgroundImage={proj.image} title={proj.name}></CardImage>
                    <CardContent>
                        <CardTitle>{proj.name}</CardTitle>
                        <CardText>{proj.description}</CardText>
                        <Button onClick={() => navigate(`/projects/${proj.url}`)}>Deep Dive</Button>
                    </CardContent>
                    </Card>
                </CardsItem>
        )
    };

export default ProjectCard;
