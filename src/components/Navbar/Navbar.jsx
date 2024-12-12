import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState("dark");

    const location = useLocation(); // Use useLocation hook from react-router-dom
    const navbarRef = useRef(null); // Reference to the navbar element

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    // Close the navbar if the user clicks outside of it
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsMobile(false);
        }
    };

    // Close the navbar when clicking on any nav link
    const handleNavLinkClick = () => {
        setIsMobile(false);
    };

    // Event listener to detect clicks outside the navbar
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Education', path: '/education' },
        { name: 'Experience', path: '/experience' },
        { name: 'Project', path: '/project' },
        { name: 'Contact Me', path: '/contact' }
    ];

    return (
        <nav className="navbar" ref={navbarRef}>
            <div className="logo">
                <Link to='/'>
                    <h2 style={{ fontFamily: "BrandFont" }}> &lt; Suraj MS /&gt;</h2>
                </Link>
            </div>
            <ul className={`nav-links ${isMobile ? "active" : ""}`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className={location.pathname === item.path ? 'active' : ''}
                            onClick={handleNavLinkClick} // Close menu on link click
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
