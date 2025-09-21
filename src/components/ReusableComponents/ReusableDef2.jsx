import React from 'react'
import PropTypes from 'prop-types';
import ItemListLinks from './ItemListLinks';
import { Link } from 'react-router-dom';
import '../../styles/ReusableDef2.css'
import '../../styles/ReusableDef.css'

function ReusableDef2({ name, title, description, imgSrc, sub_title, githubLink, links, iconClass }) {
  return (
    <div className='dashboard'>
      <div className="left_Dashboard">
        <div className="intro_dashboard">
          <p style={{  fontWeight: 'bold' }}>Hello <span style={{ color: 'var(--theme-primary )' }}>.</span></p>
          <p style={{ display: "flex", alignItems: "center", margin: "10px 0 10px 0px" }}>
            {/* Horizontal line SVG */}
            <svg  width="70" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="2" x2="50" y2="2" stroke="var(--theme-primary)" strokeWidth="4" />
            </svg>

            {/* Name text */}
            <p style={{ fontFamily: "CustomFont, sans-serif"}}>
              I'm {name}
            </p>
          </p>
          <p style={{  }}>{title}</p>
        </div>
        {links.length > 0 && <ItemListLinks links={links} />}
        <div className="dashboad_buttons">
          <Link to='/resume' className='dashboad_buttons_item' style={{ background: 'var(--text-color )', color:'var(--background-color)'}}>View or Download Resume</Link>
          <Link to="/contact" className='dashboad_buttons_item' style={{ border: '1px solid var(--text-color )', marginLeft: '10px' , color:'var(--text-color)' }}>Contact Me</Link>
        </div>
      </div>
      <div className="right_Dashboard">
        <div className='dashboard_img'>
          <img style={{ width: '100%' }} src={imgSrc} alt="Programming Icon" />
        </div>
      </div>
    </div>
  )
}

export default ReusableDef2