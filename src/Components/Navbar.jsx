import React from "react";
import MusicButton from "./Music";

function Navbar() {
    return (
        <nav>
            <div className="brand">
                <MusicButton />
                <h1 className="logo">Rjung Thapa</h1>
            </div>

            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
