import React from 'react'
import Skills from './Skills'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiScrollToBottomLine } from "react-icons/ri";
import ReusableDef from '../components/ReusableComponents/ReusableDef';
import ReusableDef2 from '../components/ReusableComponents/ReusableDef2';
import img404 from '../assets/images/404.png'



const Home = () => {
    const socialLinks = [
        { url: 'https://www.linkedin.com/in/suraj-m-s-757540151/', icon: FaLinkedin },
        { url: 'https://github.com/suraj-ms', icon: FaGithub },
        { url: 'https://x.com/SurajMavatkar', icon: FaSquareXTwitter },
    ];
    return (
        <div>
            <ReusableDef2
                name="SURAJ MS"
                title="Senior Software Engineer"
                description="A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact."
                imgSrc={img404}
                githubLink="https://github.com/suraj-ms/My-Portfolio"
                links={socialLinks}
                iconClass="iconClass"
            />

            <div className="lable_poster">
                <p>Javascript</p>
                <p>Node/Express</p>
                <p>Mango/MySQL</p>
                <p>React.js</p>
                <p>Git</p>
                <p>Python</p>
                <p>AI Development</p>
                <p>Cloud</p>
            </div>

            <Skills />
            <div style={{ position: 'fixed', bottom: '2px', right: '2px' }}>
                <RiScrollToBottomLine size={40} color="#414d55" />
            </div>

        </div>
    )
}

export default Home