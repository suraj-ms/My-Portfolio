import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaPython, FaJava, FaAngular, FaLinux, FaGit, FaDocker } from "react-icons/fa";
import { SiExpress, SiMysql, SiAdobexd, SiTypescript, SiDjango, SiGooglemaps } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { id: 1, icon: <FaReact />, name: 'React', url: 'https://reactjs.org/' },
  { id: 2, icon: <FaNodeJs />, name: 'Node.js', url: 'https://nodejs.org/' },
  { id: 3, icon: <SiExpress />, name: 'Express JS', url: 'https://expressjs.com/' },
  { id: 4, icon: <DiMongodb />, name: 'MongoDB', url: 'https://www.mongodb.com/' },
  { id: 5, icon: <SiMysql />, name: 'MySQL', url: 'https://www.mysql.com/' },
  { id: 17, icon: <SiGooglemaps />, name: 'GoogleMaps', url: 'https://developers.google.com/maps' },
  { id: 18, icon: <IoLogoFirebase />, name: 'Firebase', url: 'https://firebase.google.com/' },
  { id: 19, icon: <RiGeminiFill />, name: 'Gemini', url: 'https://gemini.com/' },
  { id: 20, icon: <TbBrandReactNative />, name: 'ReactNative', url: 'https://reactnative.dev/' },
  { id: 6, icon: <FaHtml5 />, name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { id: 7, icon: <FaCss3Alt />, name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { id: 8, icon: <FaAws />, name: 'AWS', url: 'https://aws.amazon.com/' },
  { id: 9, icon: <SiAdobexd />, name: 'Adobe XD', url: 'https://adobexdplatform.com/' },
  { id: 10, icon: <FaJava />, name: 'Java', url: 'https://www.java.com/' },
  { id: 11, icon: <FaAngular />, name: 'Angular', url: 'https://angular.io/' },
  { id: 12, icon: <SiTypescript />, name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { id: 13, icon: <SiDjango />, name: 'Django', url: 'https://www.djangoproject.com/' },
  { id: 14, icon: <FaDocker />, name: 'Docker', url: 'https://www.docker.com/' },
  { id: 15, icon: <FaLinux />, name: 'Linux', url: 'https://www.linux.org/' },
  { id: 16, icon: <FaGit />, name: 'Git', url: 'https://git-scm.com/' },

];

const SkillLogos = () => {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Skills</h1>
      <ul className='skill_logos'>
        {skills.map(skill => (
          <li className='skill_logos_list' key={skill.id}>
            <a href={skill.url} target="_blank" rel="noopener noreferrer">
              <p>{skill.icon}</p> <p>{skill.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillLogos;
