import React from 'react';
import "./Navbar.scss";
import images from "../../constants/index";

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="LOGO" />
            </div>
            <ul className='app__navabr-links'>
                {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                    <li key={item} className="app__flex p-text">
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar