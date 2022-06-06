import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import NotFound from '@404/NotFound';
import Info from '@projects/InfoPage';


const ProjectInfo = () => {
    const [state, setState] = useState({
                                    headline: "",
                                    intro: "",
                                    technologies: [],
                                    explanation: [],
                                    outcomes: []
                                    });

    let { info } = useParams<{ info:string }>();

    useEffect(()=>{
        fetch('/data/projectsContent.json')
            .then(response => {
            response.json().then(projContent => {
                let specificProjInfo = projContent[info!]
                setState({...specificProjInfo});
            })
        })
    }, [])

    // if undefined then will render the not found page
    const contentExists = (state.explanation === undefined)

    return (
        <>
        {
            contentExists ? 
            <NotFound projects={true}/> : 
            <>
            <Info projectInfo={state} /> 
        </>
        }
        </>
        )
    };

export default ProjectInfo;