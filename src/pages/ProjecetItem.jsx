import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiGooglemaps } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import '../styles/ProjecetItem.css'
import { RiGeminiFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { CiMobile3 } from "react-icons/ci";
import { SiApachekafka } from "react-icons/si";

const ProjecetItem = () => {
    return (
        <>
            <Link to='https://github.com/suraj-ms/ShivajiCreationFullStack' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Shivaji Creation</div>
                <div className="project_desc">Client Management System</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="Node.js"><FaNodeJs className='stack_img' /></li>
                    <li className="tech_stack_item" title="React"><FaReact className='stack_img' /></li>
                    <li className="tech_stack_item" title="HTML5"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item" title="CSS3"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item" title="JavaScript"><FaJs className='stack_img' /></li>
                    <li className="tech_stack_item" title="MongoDB"><DiMongodb className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/AI-Travel-Agent' className='project'>
                <div className="project_title"><ion-icon name="phone-portrait-outline"></ion-icon>AI-Travel-Agent</div>
                <div className="project_desc">React Native, Firebase, Google map, Gemini</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="React Native"><TbBrandReactNative className='stack_img' /></li>
                    <li className="tech_stack_item" title="Firebase"><IoLogoFirebase className='stack_img' /></li>
                    <li className="tech_stack_item" title="Google Maps"><SiGooglemaps className='stack_img' /></li>
                    <li className="tech_stack_item" title="Gemini"><RiGeminiFill className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/My-Portfolio' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> MyPortfolio</div>
                <div className="project_desc">A project using react</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="React"><FaReact className='stack_img' /></li>
                    <li className="tech_stack_item" title="HTML5"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item" title="CSS3"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item" title="JavaScript"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/Kafka-demo' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon>Kafka Demo</div>
                <div className="project_desc">A base kafka working model</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="JavaScript"><FaJs className='stack_img' /></li>
                    <li className="tech_stack_item" title="kafka"><SiApachekafka  className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/NetflixClone' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Netflix Clone</div>
                <div className="project_desc">A netflix clone project</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="HTML5"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item" title="React"><FaReact className='stack_img' /></li>
                    <li className="tech_stack_item" title="CSS3"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item" title="JavaScript"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/Number-Guessing-Game' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Guess Game</div>
                <div className="project_desc">A game using java script</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="HTML5"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item" title="CSS3"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item" title="JavaScript"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/jkTech-AWS-s3-like-service' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Aws S3 bucket</div>
                <div className="project_desc">A working modle of s3 bucket</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item" title="Node.js"><FaNodeJs className='stack_img' /></li>
                    <li className="tech_stack_item" title="Express"><SiExpress className='stack_img' /></li>
                </ul>

            </Link>

        </>
    )
}

export default ProjecetItem