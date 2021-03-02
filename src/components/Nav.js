import React, { useState } from 'react'

function Nav(){
    const [navState, toggleNav] = useState('');

    function handleNav(){
        navState == '' ? toggleNav('is-active') : toggleNav('');
        console.log(navState);
    }
    
    return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" target="_blank" href="https://github.com/radergan"><img src={process.env.PUBLIC_URL + '/github.png'} />github.com/radergan</a>
                <a className={`navbar-burger ${navState}`} role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu" onClick={handleNav}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${navState}`} id="navMenu">
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <a className="navbar-item" href="#projects">Projects</a>
                    <a className="navbar-item" href="./patrick-j-dalton-resume.pdf" target="_blank">Resume</a>
                    <a className="navbar-item" href="https://www.linkedin.com/in/patrick-j-dalton-47bbb9192/" target="_blank">LinkedIn</a>
                    <div className="navbar-item">
                        <a className="button is-rounded is-primary" href="https://www.linkedin.com/in/patrick-j-dalton-47bbb9192/" target="_blank">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}
export default Nav