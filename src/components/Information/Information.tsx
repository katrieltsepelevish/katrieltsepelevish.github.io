import React from "react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Information = () => (
<section className='info'>
    <h1 className='info__title'>Katriel Tsepelevish</h1>
    <h2 className='info__subtitle'>Full-stack Engineer at <a href="https://scopiolabs.com/">Scopio Labs</a></h2>
    <p className='info__description'>A passionate self-taught Full-stack developer from Israel. Focused on building interactive web applications and backend services.<br /><br />Here are a few technologies I've been working with recently:</p>
    <ul className='info__bullets'>
        <li className='info__bullet'>HTML</li>
        <li className='info__bullet'>(S)CSS</li>
        <li className='info__bullet'>Javascript (ES6+)</li>
        <li className='info__bullet'>React</li>
        <li className='info__bullet'>Next.JS</li>
        <li className='info__bullet'>Node.JS</li>
        <li className='info__bullet'>Express</li>
        <li className='info__bullet'>Nest.JS</li>
    </ul>
    <div className='info__buttons'>
        <a href="https://il.linkedin.com/in/katriel-tsepelevish-475866220" className="button button--flex"><AiFillLinkedin /> Linkedin</a>
        <a href="https://github.com/katrieltsepelevish" className="button button--flex"><AiFillGithub /> Github</a>
    </div>
</section>
);

export default Information;