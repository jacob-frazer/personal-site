import React, { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';


const ProjectInfo = () => {
    // redirect function to the more info page for projects
    let navigate = useNavigate();

    // get info on project from url and get data
    let params = useParams();
    console.log(params)
    return (
        <>
        <div>Reached page for {params.info}</div>
        </>
        )
    };

export default ProjectInfo;