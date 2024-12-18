import React from 'react'
import Skills from './Skills'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import ReusableDef from '../components/ReusableComponents/ReusableDef'
import img404 from '../assets/images/404.png'

const Home = () => {
    const socialLinks = [
        { url: 'https://www.linkedin.com/in/suraj-m-s-757540151/', icon: FaLinkedin },
        { url: 'https://github.com/suraj-ms', icon: FaGithub },
        { url: 'https://x.com/SurajMavatkar', icon: FaSquareXTwitter },
    ];
    return (
        <div>
            <ReusableDef
                title="SURAJ MS"
                description="A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact."
                imgSrc={img404}
                githubLink="https://github.com/suraj-ms/My-Portfolio"
                links={socialLinks}
                iconClass="iconClass"
                 />
                
            <Skills />
        </div>
    )
}

export default Home