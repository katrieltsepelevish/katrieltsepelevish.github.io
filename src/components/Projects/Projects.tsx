import React from "react";
import axios from "axios";
import { GridLoader } from 'react-spinners';

import Project from "./Project";

const GITHUB_REPOS_URL = 'https://api.github.com/users/katrieltsepelevish/repos';

const Projects = () => {
    const [projects, setProjects] = React.useState([]);

    const fetcher = async () => {
        const { data: projects } = await axios.get<any>(GITHUB_REPOS_URL);

        const formattedProjects = projects.map(({ name, description, topics, html_url }: any) => ({ name, description, topics, url: html_url }));

        setProjects(formattedProjects);
    }

    React.useEffect(() => {
        fetcher();
    }, []);

    return (
        <section className='projects'>
            <h3 className='projects__title'>Projects</h3>
                {projects.length > 1 ? (
                    <div className="projects__wrapper">
                        {projects.map(({ url, name, description, topics }) =>  <Project {...{ url, name, description, topics }} />)}
                    </div>
                    ) : (
                    <div className="projects__loader">
                        <GridLoader />
                    </div>
                )}       
        </section>
    );
}

export default Projects;