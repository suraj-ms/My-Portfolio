import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs  } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import '../styles/ProjecetItem.css'
import { Link } from 'react-router-dom';

const ProjecetItem = () => {
    return (
        <>
            <Link to='https://github.com/suraj-ms/ShivajiCreationFullStack' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Shivaji Creation</div>
                <div className="project_desc">Client Management System</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item"><FaNodeJs   className='stack_img' /></li>
                    <li className="tech_stack_item"><FaReact  className='stack_img' /></li>
                    <li className="tech_stack_item"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item"><FaJs className='stack_img' /></li>
                    <li className="tech_stack_item"><DiMongodb  className='stack_img' /></li>
                </ul>

            </Link>
            <Link to ='https://github.com/suraj-ms/My-Portfolio' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> MyPortfolio</div>
                <div className="project_desc">A project using react</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item"><FaReact className='stack_img' /></li>
                    <li className="tech_stack_item"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/NetflixClone' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Netflix Clone</div>
                <div className="project_desc">A netflix clone project</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item"><FaReact className='stack_img' /></li>
                    <li className="tech_stack_item"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/Number-Guessing-Game' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Guess Game</div>
                <div className="project_desc">A game using java script</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item"><FaHtml5 className='stack_img' /></li>
                    <li className="tech_stack_item"><FaCss3Alt className='stack_img' /></li>
                    <li className="tech_stack_item"><FaJs className='stack_img' /></li>
                </ul>

            </Link>
            <Link to='https://github.com/suraj-ms/jkTech-AWS-s3-like-service' className='project'>
                <div className="project_title"><ion-icon name="laptop-outline"></ion-icon> Aws S3 bucket</div>
                <div className="project_desc">A working modle of s3 bucket</div>
                <ul className="tech_stack">
                    <li className="tech_stack_item"><FaNodeJs className='stack_img' /></li>
                    <li className="tech_stack_item"><SiExpress  className='stack_img' /></li>
                </ul>

            </Link>

        </>
    )
}

export default ProjecetItem