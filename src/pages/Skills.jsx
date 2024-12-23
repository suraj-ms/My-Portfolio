import React from 'react'
import '../styles/Skills.css'
import { FaAws, FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql, SiExpress, SiAdobexd, SiGooglemaps } from "react-icons/si";
import web from '../assets/images/web.png'
import cloud from '../assets/images/cloud.png'
import brain from '../assets/images/3d brain.png'
import graphics from '../assets/images/graphics.png'
import { IoLogoFirebase } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import SkillLogos from './SkillLogos';


const Skills = () => {
    const handleNavigation = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>What I Do?</h1>
            <div className="skill">
                <div className="skill_item">
                    <img src={web} alt="Programming Icon" width="80%" height="80%" />
                </div>
                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">Full Stack Development</h1>
                    <ul className="skill_item_img">
                        <li onClick={() => handleNavigation('https://nodejs.org/')}><p className='skill_item_img_title'>Node Js</p> <ion-icon name="logo-nodejs"></ion-icon></li>
                        <li onClick={() => handleNavigation('https://reactjs.org/')}><p className='skill_item_img_title'>React</p> <ion-icon name="logo-react"></ion-icon></li>
                        <li onClick={() => handleNavigation('https://expressjs.com/')}><p className='skill_item_img_title'>Express</p> <SiExpress className="skill_item_img_icon" /></li>
                        <li onClick={() => handleNavigation('https://www.docker.com/')}><p className='skill_item_img_title'>Docker</p> <ion-icon name="logo-docker"></ion-icon></li>
                        <li onClick={() => handleNavigation('https://www.python.org/')}><p className='skill_item_img_title'>Python</p> <ion-icon name="logo-python"></ion-icon></li>
                        <li onClick={() => handleNavigation('https://angular.io/')}><p className='skill_item_img_title'>Angular</p> <ion-icon name="logo-angular"></ion-icon></li>
                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>End-to-End Development: Full-stack development enables creating both the client-side (frontend) and server-side (backend) of applications.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Manage the entire software development lifecycle, from planning and design to deployment and maintenance.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Strong problem-solving skills and the ability to integrate various technologies seamlessly.</p></li>
                    </ul>
                </div>

            </div>
            <div className="skill">

                <div className="skill_item skill_data i2d">
                    <h1 className="skill_item_head">Artificial Intelligence</h1>
                    <ul className="skill_item_img">
                        <li onClick={() => handleNavigation('https://ai.google.dev/')}><p className='skill_item_img_title'>Gemini</p> <RiGeminiFill className="skill_item_img_icon" /></li>
                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Utilize Gemini in your application via Google's AI platform to generate and analyze data with advanced language and reasoning capabilities.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Experience working on multiple AI platforms</p></li>
                    </ul>
                </div>

                <div className="skill_item i2i">
                    <img src={brain} alt="Programming Icon" width="80%" height="80%" />
                </div>

            </div>
            <div className="skill">

                <div className="skill_item ">
                    <img src={cloud} alt="Programming Icon" width="80%" height="80%" />
                </div>
                <div className="skill_item skill_data ">

                    <h1 className="skill_item_head">Cloud Infra-Architecture</h1>
                    <ul className="skill_item_img">
                        <li onClick={() => handleNavigation('https://aws.amazon.com/')}><p className='skill_item_img_title'>AWS</p> <FaAws className="skill_item_img_icon" /></li>
                        <li onClick={() => handleNavigation('https://www.mongodb.com/')}><p className='skill_item_img_title'>MongoDb</p> <DiMongodb className="skill_item_img_icon" /></li>
                        <li onClick={() => handleNavigation('https://www.mysql.com/')}><p className='skill_item_img_title'>Sql</p> <SiMysql className="skill_item_img_icon" /></li>
                        <li onClick={() => handleNavigation('https://firebase.google.com/')}><p className='skill_item_img_title'>Firbase</p> <IoLogoFirebase className="skill_item_img_icon" /></li>
                        <li onClick={() => handleNavigation('https://mapsplatform.google.com/')}><p className='skill_item_img_title'>Google Maps</p> <SiGooglemaps className="skill_item_img_icon" /></li>
                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Leverage Google Maps Platform to retrieve precise location data and integrate it into applications for features like navigation, geocoding, and location-based services.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Firebase simplifies backend development by providing real-time databases, authentication, hosting, and cloud functions for seamless app integration.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Experience working on multiple cloud platforms</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Hosting and maintaining applications on virtual machine instances along with integration of databases</p></li>
                    </ul>
                </div>



            </div>
            <div className="skill">


                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">UI/UX Design</h1>
                    <ul className="skill_item_img">
                        <li onClick={() => handleNavigation('https://adobexdplatform.com/')}><p className='skill_item_img_title'>Adobe Xd</p><SiAdobexd className="skill_item_img_icon" /> </li>
                        <li onClick={() => handleNavigation('https://www.figma.com/')}><p className='skill_item_img_title'>Figma</p> <FaFigma className="skill_item_img_icon" /></li>


                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Designing highly attractive user interface for mobile and web applications</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Customizing logo designs</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Creating the flow and system design of application functionalities to optimize user experience</p></li>
                    </ul>
                </div>


                <div className="skill_item">
                    <img src={graphics} alt="Programming Icon" width="80%" height="80%" />
                </div>


            </div>

            <SkillLogos />


        </div>
    )
}

export default Skills