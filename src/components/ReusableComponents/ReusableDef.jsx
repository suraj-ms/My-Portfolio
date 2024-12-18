import React from 'react';
import PropTypes from 'prop-types';
import ItemListLinks from './ItemListLinks';
import { Link } from 'react-router-dom';
import '../../styles/ReusableDef.css'

const ReusableDef = ({ title, description, imgSrc, sub_title, githubLink, links, iconClass }) => {
  return (
    <div className='greeting'>
      <div className="greeting_item i2d">
        <h1 style={{ fontFamily: "CustomFont, sans-serif" }}>{title}</h1>
        <h2 style={{fontSize: '2rem'}}>{sub_title}</h2>
        <p>{description}</p>
        {links.length > 0 && <ItemListLinks links={links} iconClass={iconClass} />}
        {githubLink && (<Link to={githubLink} className="star_me">
          <ion-icon name="star-outline"></ion-icon> Star Me On GitHub
        </Link>)}
      </div>

      <div className='greet_img greeting_item i2i'>
        <img src={imgSrc} alt="Programming Icon" width="60%" height="60%" />
      </div>
    </div>
  );
};

ReusableDef.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  githubLabel: PropTypes.string.isRequired,
  iconClass: PropTypes.string, // Optional for icon styling
};

export default ReusableDef;
