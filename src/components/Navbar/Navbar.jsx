import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState("dark");

    const location = useLocation(); // Use useLocation hook from react-router-dom

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

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
                <Link to='/'><h2 style={{ fontFamily: "BrandFont" }}> &lt; Suraj MS /&gt;</h2>
                </Link>
            </div>
            <ul className={`nav-links ${isMobile ? "active" : ""}`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className={location.pathname === item.path ? 'active' : ''}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <button className="theme_btn" onClick={toggleTheme}>
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
