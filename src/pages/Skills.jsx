import React from 'react'
import '../styles/Skills.css'
import { FaAws } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import web from '../assets/images/web.png'
import cloud from '../assets/images/cloud.png'
import graphics from '../assets/images/graphics.png'



const Skills = () => {
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
                        <li><ion-icon name="logo-nodejs"></ion-icon></li>
                        <li><ion-icon name="logo-react"></ion-icon></li>
                        <li><ion-icon name="logo-css3"></ion-icon></li>
                        <li><ion-icon name="logo-docker"></ion-icon></li>
                        <li><ion-icon name="logo-python"></ion-icon></li>
                        <li><ion-icon name="logo-angular"></ion-icon></li>

                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Build, manage, and improve server-side operating systems, databases, libraries, and frameworks</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Building resposive websites and deploy.</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Creating application backend in NodeJS</p></li>
                    </ul>
                </div>

            </div>
            <div className="skill">

                <div className="skill_item skill_data i2d">
                    <h1 className="skill_item_head">Cloud Infra-Architecture</h1>
                    <ul className="skill_item_img">
                        <li><FaAws className="skill_item_img_icon" /></li>
                        <li><DiMongodb className="skill_item_img_icon" /></li>
                        <li><SiMysql className="skill_item_img_icon" /></li>


                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Experience working on multiple cloud platforms</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Hosting and maintaining websites on virtual machine instances along with integration of databases</p></li>
                    </ul>
                </div>

                <div className="skill_item i2i">
                    <img src={cloud} alt="Programming Icon" width="80%" height="80%" />
                </div>

            </div>
            <div className="skill">

                <div className="skill_item">
                    <img src={graphics} alt="Programming Icon" width="80%" height="80%" />
                </div>

                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">UI/UX Design</h1>
                    <ul className="skill_item_img">
                        <li><SiAdobexd className="skill_item_img_icon" /></li>
                        <li><FaFigma  className="skill_item_img_icon" /></li>


                    </ul>
                    <ul className="skill_item_body">
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Experience working on multiple cloud platforms</p></li>
                        <li><ion-icon name="flash-outline"></ion-icon> <p>Hosting and maintaining websites on virtual machine instances along with integration of databases</p></li>
                    </ul>
                </div>



            </div>


        </div>
    )
}

export default Skills