import React from "react";

interface ProjectProps {
    name: string;
    description: string;
    url: string;
    topics?: string[];
}

const Project: React.FC<ProjectProps> = ({url, name, description, topics}) => (
    <div className='projects__project'>
        <a href={url} className='projects__project__link'>
            <span className='projects__project__title'>{name}</span>
            <p className='projects__project__description'>{description}</p>
            {topics && topics.length > 0 && (
                <ul className='projects__project__topics'>
                    {topics.map((topic) => <li className="projects__project__topic">{topic}</li>)}
                </ul>
            )}
        </a>
    </div> 
);

export default Project;