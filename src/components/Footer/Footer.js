import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="contact">
                    <h1>CONTACT</h1>
                    <h1>Ralphie Celedon</h1>
                    <h1>ralphie0319@gmail.com</h1>
                    <div className="icons">
                        <a href="https://github.com/ralphie94" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rafaelceledon/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;