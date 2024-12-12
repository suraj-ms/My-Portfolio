import React from 'react'
import ReusableDef from '../components/ReusableComponents/ReusableDef';
import project from '../assets/images/project.png';
import ProjecetItem from './ProjecetItem';
import '../styles/Education.css'
import { Link } from 'react-router-dom';
import Publications from './Publications';

const Project = () => {
  const socialLinks = [];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <ReusableDef
        title="PROJECT"
        description="I specialize in creating innovative web applications using the latest technologies, deploying them on scalable cloud infrastructures for optimal performance, flexibility, and reliability, ensuring impactful, future-proof solutions for every project."
        imgSrc={project}
        links={socialLinks}
        iconClass="iconClass"
      />
      <div className="project_item">
        <ProjecetItem />
      </div>
      <Link to='https://github.com/suraj-ms?tab=repositories' className='more_items'>More Projeccts</Link>
      <div className="border"></div>
      <div style={{ textAlign: 'center'}}>
        <Publications />
      </div>
    </div>
  )
}

export default Project