import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

class NavBar extends Component {
    render(){
        return(
            <div className="nav">
                <div className="nav-header">
                    <h1>Ralphie Celedon | Full Stack Developer</h1>
                </div>
                <div className="nav-links">
                    <Link className="link">About</Link>
                    <Link to={routes.SKILLS} className="link">Skills</Link>
                    <Link className="link">Projects</Link>
                    <Link className="link">Contact</Link>
                </div>
            </div>
        )
    }
}

export default NavBar;