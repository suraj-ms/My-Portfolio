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
        description="My projects makes use of vast variety of latest technology tools. My best experience is to create projects and deploy them to web applications using cloud infrastructure."
        imgSrc={project}
        links={socialLinks}
        iconClass="iconClass"
      />
      <div className="project_item">
        <ProjecetItem />
      </div>
      <Link to='/' className='more_items'>More Projeccts</Link>
      <div className="border"></div>
      <div style={{ textAlign: 'center'}}>
        <Publications />
      </div>
    </div>
  )
}

export default Project