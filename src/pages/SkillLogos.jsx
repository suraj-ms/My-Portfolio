import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaPython, FaJava, FaAngular } from "react-icons/fa";
import { SiExpress, SiMysql, SiAdobexd  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const skills = [
  { id: 1, icon: <FaReact />, name: 'React' },
  { id: 2, icon: <FaNodeJs />, name: 'Node.js' },
  { id: 3, icon: <SiExpress />, name: 'Express jS' },
  { id: 10, icon: < FaPython  />, name: 'MongoDb' },
  { id: 4, icon: <DiMongodb  />, name: 'MongoDb' },
  { id: 5, icon: < SiMysql  />, name: 'My Sql' },
  { id: 6, icon: < FaHtml5  />, name: 'HTML' },
  { id: 7, icon: <FaCss3Alt />, name: 'CSS' },
  { id: 8, icon: < FaAws  />, name: 'AWS' },
  { id: 9, icon: < SiAdobexd  />, name: 'Adobe XD' },
  { id: 10, icon: < FaJava   />, name: 'Java' },
  { id: 10, icon: < FaAngular    />, name: 'Angular' },
];

const SkillLogos = () => {
  return (
    <div>
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Skills</h1>
      <ul className='skill_logos'>
        {skills.map(skill => (
          <li className='skill_logos_list' key={skill.id} >
          <p>{skill.icon}</p> <p>{skill.name}</p>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillLogos;