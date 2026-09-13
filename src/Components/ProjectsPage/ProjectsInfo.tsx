import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import NotFound from '@404/NotFound';
import Info from '@projects/InfoPage';
import LoadError from '@generics/LoadError';
import { LoadingPage } from '@generics/SimpleStyledComponents';

type ProjectContent = {
    headline: string,
    intro: string,
    technologies: string[],
    explanation: string[],
    outcomes: string[]
};

type PageState =
    | { status: "loading" }
    | { status: "loaded", content: ProjectContent }
    | { status: "notFound" }
    | { status: "error" };

const ProjectInfo = () => {
    const [state, setState] = useState<PageState>({ status: "loading" });

    let { info } = useParams<{ info:string }>();

    useEffect(()=>{
        // ignore responses for a project we have since navigated away from
        let cancelled = false;
        setState({ status: "loading" });

        fetch('/data/projectsContent.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load project content: ${response.status}`);
                }
                return response.json();
            })
            .then((projContent: Record<string, ProjectContent>) => {
                if (cancelled) return;
                // only accept the file's own keys, so paths like /projects/constructor still 404
                const exists = info !== undefined && Object.prototype.hasOwnProperty.call(projContent, info);
                setState(exists ? { status: "loaded", content: projContent[info!] } : { status: "notFound" });
            })
            .catch(err => {
                if (cancelled) return;
                console.error(err);
                setState({ status: "error" });
            });

        return () => { cancelled = true; };
    }, [info])

    if (state.status === "loading") {
        return <LoadingPage/>;
    }
    if (state.status === "notFound") {
        return <NotFound projects={true}/>;
    }
    if (state.status === "error") {
        return <LoadError message="Sorry, this project couldn't be loaded right now. Please try again later."/>;
    }
    return <Info projectInfo={state.content} />;
    };

export default ProjectInfo;
