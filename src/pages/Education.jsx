import React from 'react';
import { SiHackerrank, SiLeetcode, SiCodeforces } from "react-icons/si";
import ReusableDef from '../components/ReusableComponents/ReusableDef';
import educationimg from '../assets/images/education.png';
import '../styles/Education.css'
import EducationItem from './EducationItem';
import Certification from './Certification';

const Education = () => {
  const socialLinks = [
    { url: 'https://www.linkedin.com', icon: SiHackerrank },
    { url: 'https://github.com', icon: SiLeetcode },
    { url: 'https://twitter.com', icon: SiCodeforces },
  ];

  return (
    <div>
      <ReusableDef
        title="EDUCATION"
        description="Basic Qualification and Certifications"
        imgSrc={educationimg}
        links={socialLinks}
        iconClass="iconClass"
      />
      <EducationItem />
      <div className="border"></div>
      <div className="certification_component">
        <Certification />
      </div>

    </div>
  );
};

export default Education;
