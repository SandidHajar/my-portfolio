import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    Hajar Sandid
                </a>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
                         Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
                        Skills
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link" onClick={() => setIsOpen(false)}>
                        Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
