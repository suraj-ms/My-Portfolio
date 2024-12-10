import React from 'react';
import '../styles/SocialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <ul className="social_media">
      <li>
        <a href="https://www.linkedin.com" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li>
        <a href="https://github.com"  rel="noopener noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
      <li>
        <a href="https://twitter.com"  rel="noopener noreferrer">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
