import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    // Get the current path from the URL
    const getCurrentPath = () => window.location.pathname;

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Education', path: '/education' },
        { name: 'Experience', path: '/experience' },
        { name: 'Project', path: '/project' },
        { name: 'Contact Me', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="logo">
                <h2 style={{fontFamily: "BrandFont"}}> &lt; Suraj MS /&gt;</h2>
            </div>
            <ul className={`nav-links ${isMobile ? "active" : ""}`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.path}
                            className={getCurrentPath() === item.path ? 'active' : ''}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
                <li>
                    <button className='theme_btn' onClick={toggleTheme}>
                        <ion-icon name={theme === "light" ? "moon-outline" : "sunny-outline"}></ion-icon>
                    </button>
                </li>
            </ul>
            <div
                className={`hamburger ${isMobile ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default NavBar;
