import React, { Component } from "react";

class Projects extends Component {
    render(){
        return(
            <section id="projects">
            <div>
                <h1 className="projects-header">Projects</h1>
                <div className="projects">
                    <div className="project-item">
                        <a href="https://ralphie94.github.io/Movie-trivia/" rel="noopener noreferrer" target="_blank">
                            <img src="/img/movietrivia.png" alt="" className="project-pic"></img>
                        </a>
                        <div className="project-info">
                            <h1>Movie Trivia</h1>
                            <h2>Movie Trivia is a trivia game where you are given <br/> a picture from a movie and you must guess the movie <br/> from the four options given. Be careful! You only have <br/> 10 seconds for each question!</h2>
                            <h2>Technologies Used: <br/> HTML 5 | CSS3 | JavaScript | jQuery | Bootstrap</h2>
                            <a className="btn" href="https://github.com/ralphie94/Movie-trivia" rel="noopener noreferrer" target="_blank">Github</a>
                            <a className="btn" href="https://ralphie94.github.io/Movie-trivia/" rel="noopener noreferrer" target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project">
                        <a href="https://mighty-ravine-58205.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <img src="/img/cinefile.png" alt="" className="project-pic"></img>
                        </a>
                        <div className="project-info">
                            <h1>Cinefile</h1>
                            <h2>Cinefile is an IMDb inspired movie app where you <br/> can discover movies, watch trailers, view actors and <br/> their profiles and add movies to your watch list to keep <br/> track of movies you would like to watch.</h2>
                            <h2>Technologies Used: React | Node.js | Mongoose | <br/> MongoDB | Express | CSS3 | Bootstrap | Heroku</h2>
                            <a className="btn" href="https://github.com/ralphie94/movie-react" rel="noopener noreferrer" target="_blank">Github</a>
                            <a className="btn" href="https://mighty-ravine-58205.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <img src="/img/wine.png" className="project-pic" alt=""></img>
                        <div className="project-info">
                            <h1>Wine Post</h1>
                            <h2>Wine Post is a social media app for wine enthusiasts <br/> by wine enthusiasts. Users (over 21 please) can create <br/> an account to connect with fellow wine enthusiasts around <br/> the world. Users can share their reviews of and experiences with wine.</h2>
                            <h2>Technologies Used: React | Python | Flask | CSS3 | Sketch</h2>
                            <a className="btn" href="https://github.com/ralphie94/wine_react" rel="noopener noreferrer" target="_blank">Github</a>
                            <a className="btn" href="" rel="noopener noreferrer" target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project">
                        <a href="https://ancient-coast-25670.herokuapp.com/caterco" rel="noopener noreferrer" target="_blank">
                            <img src="/img/caterco.png" alt="" className="project-pic"></img>
                        </a>
                        <div className="project-info">
                            <h1>CaterCo</h1>
                            <h2>CaterCo is a MEN stack CRUD app where you <br/> can order food and pick the day you want your <br/> food from a calendar.</h2>
                            <h2>Technologies Used: Express | Node.js | Mongoose | <br/> MongoDB | HTML5 | CSS3 | Bootstrap</h2>
                            <a className="btn" href="https://github.com/ralphie94/CaterCo/tree/schema" rel="noopener noreferrer" target="_blank">Github</a>
                            <a className="btn" href="https://ancient-coast-25670.herokuapp.com/caterco" rel="noopener noreferrer" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Projects;