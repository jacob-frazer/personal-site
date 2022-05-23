import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import colours from '../utils/colours';

const CardsItem = styled.li`
    display: flex;
    padding: 1rem;
    @media(min-width: 40rem) {
        width: 50%;
    }
    @media(min-width: 56rem) {
        width: 30%;
    }
    `; 

const CardImage = styled.div<{backgroundImage:string}>`
    background-image: url(${props => props.backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    //filter: saturate(180%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
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
    padding: 1rem;
    `;

const CardTitle = styled.div`
    color: @gray-dark;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    `;

const CardText = styled.p`
    flex: 1 1 auto;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    `;

const Button = styled.button`
    background-color: ${colours.light};
    border: 1px solid grey;
    //border-radius: 1rem;
    color: black;
    padding: 0.5rem;
    display: block;
    width: 100%;
    // Animate the size, inside
    transition: 0.25s;
    &:hover,
    &:focus {
        box-shadow: inset 0 0 0 2em var(--hover);
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
                    <CardImage backgroundImage={proj.image}></CardImage>
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