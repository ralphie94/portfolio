import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import * as routes from "./constants/routes";
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="profile">
        <div className="bio">
          <h1 className="name">Ralphie Celedon</h1>
          <h3 className="bio">I'm a full stack developer with a passion <br/> for frontend development. I'm always looking to challenge <br/> myself to help me grow as a developer. </h3>
        </div>
        <img src="/img/ralphie.jpg" alt="" className="image"></img>
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
