import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import NotFound from '@404/NotFound';
import Info from '@projects/InfoPage';
import LoadError from '@generics/LoadError';
import { LoadingPage } from '@generics/SimpleStyledComponents';

import { EXPERIENCE } from '@utils/experience';

type ProjectContent = {
    headline: string,
    intro: string,
    technologies: string[],
    explanation: string[],
    outcomes: string[]
};

type ProjectSummary = {
    name: string,
    image: string,
    url: string,
    earlier?: boolean
};

type PageState =
    | { status: "loading" }
    | { status: "loaded", content: ProjectContent, image?: string, context?: string, next?: { name: string, url: string } }
    | { status: "notFound" }
    | { status: "error" };

const loadJson = (url: string) =>
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        return response.json();
    });

// where the project was done, e.g. "UKHSA · 2020 – 2022", taken from the experience timeline
const projectContext = (slug: string, summary?: ProjectSummary) => {
    const role = EXPERIENCE.find((r) => r.projects.some((p) => p.url === slug));
    if (role) {
        return `${role.company} · ${role.years}`;
    }
    return summary?.earlier ? "Personal project" : undefined;
};

const ProjectInfo = () => {
    const [state, setState] = useState<PageState>({ status: "loading" });

    let { info } = useParams<{ info:string }>();

    useEffect(()=>{
        // ignore responses for a project we have since navigated away from
        let cancelled = false;
        setState({ status: "loading" });

        Promise.all([
            loadJson('/data/projectsContent.json'),
            // the card list only adds the banner image, context and next project link, so the page still works without it
            loadJson('/data/projectsInfo.json').catch(() => []),
        ])
            .then(([projContent, projInfo]: [Record<string, ProjectContent>, unknown]) => {
                if (cancelled) return;
                // only accept the file's own keys, so paths like /projects/constructor still 404
                const exists = info !== undefined && Object.prototype.hasOwnProperty.call(projContent, info);
                if (!exists) {
                    setState({ status: "notFound" });
                    return;
                }

                const summaries: ProjectSummary[] = Array.isArray(projInfo) ? projInfo : [];
                const index = summaries.findIndex((p) => p.url === info);
                const summary = index >= 0 ? summaries[index] : undefined;
                const nextSummary = index >= 0 && summaries.length > 1 ? summaries[(index + 1) % summaries.length] : undefined;

                setState({
                    status: "loaded",
                    content: projContent[info!],
                    image: summary?.image,
                    context: projectContext(info!, summary),
                    next: nextSummary && { name: nextSummary.name, url: nextSummary.url },
                });
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
    return <Info projectInfo={state.content} image={state.image} context={state.context} next={state.next} />;
    };

export default ProjectInfo;
