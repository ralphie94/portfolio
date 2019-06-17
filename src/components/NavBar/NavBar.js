import React, { Component } from "react";

class NavBar extends Component {
    render(){
        return(
            <div className="nav">
                <div className="nav-header">
                    <h1 className="nav-name">Ralphie Celedon | Full Stack Developer</h1>
                </div>
                <div className="nav-links">
                    <a href="#about" className="link">About</a>
                    <a href="#skills" className="link">Skills</a>
                    <a href="#projects" className="link">Projects</a>
                    <a href="#contact" className="link">Contact</a>
                </div>
            </div>
        )
    }
}

export default NavBar;