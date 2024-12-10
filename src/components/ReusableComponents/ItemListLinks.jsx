import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/ItemListLinks.css'; // Importing CSS for this component

const ItemListLinks = ({ links, iconClass }) => {
  return (
    <ul className="social_media">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>
            <link.icon className={iconClass} />  {/* Apply the iconClass here */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ItemListLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string, // For ion-icon names
        PropTypes.elementType, // For React components
      ]).isRequired,
    })
  ).isRequired,
  iconClass: PropTypes.string, // Optional CSS class for the icons
};

ItemListLinks.defaultProps = {
  iconClass: '', // Default to no class
};

export default ItemListLinks;
