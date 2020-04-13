import React, { Component } from "react";
import {Jumbotron, Container, Image} from "react-bootstrap";
import "../../css/custom-navbar.css";
import {Link} from "react-router-dom";


class Home extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid className={"bg-white p-0"}>
                    <Image src={require("../../img/landing3.jpg")} fluid />
                    <div className="card-body bg-white text-center text-dark mb-3 navgrad">
                        <h3 className="card-title h3 my-4 "><strong>Elijah Ahmad</strong></h3>
                        <p className="card-text py-0">A first year computer science student studying at</p>
                        <p className="card-text py-0">Imperial College London </p>
                        <p className="alert-danger"><strong>
                            This website is under development. </strong>
                        </p>
                    </div>
                </Jumbotron>


                <Container className={" p-2 text-dark"}>
                    <h2 className={"bg-white text-dark text-center p-2"}><u>About Me</u></h2>
                    <div className="card-deck">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Education </h5>
                                    <p className="card-text">
                                        <p><strong>Hello!</strong> I am Elijah (Al-Maz) Ahmad, I am a first year
                                            Computer Science studying at Imperial College London. I left School with
                                        </p>
                                        <ul>
                                            <li> 11 A*-C at GCSE </li>
                                            <li> A*,A, A, A, B at A-Level</li>
                                        </ul>

                                        <p> To summarise myself quickly: I'm a driven and responsible student/employee,
                                            with an eye out for opportunities and experiences.
                                        </p>
                                    </p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Personal Projects</h5>
                                    <p className="card-text">
                                        <p> I regularly complete personal projects (published and unpublished), with the main goal to make my
                                            life and the other lives better. My current projects involve
                                        </p>
                                        <ul>
                                            <li> Instagram Automation (see below),</li>
                                            <li> maintaining this website,</li>
                                            <li> Personal assistant for school</li>
                                        </ul>
                                        <p> To see my other projects go to <a href={"https://www.doc.ic.ac.uk/~aa1719/#/projects"}><u> here </u></a>
                                        </p>
                                    </p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Extra-Curricular</h5>
                                    <p className="card-text">
                                        <p> I have trained in martial arts for 15 years, studying Kickboxing, Muay Thai,
                                            and Taekwondo. Improving  my <strong>discipline, perserverance</strong> and
                                            <strong>integrity</strong>.
                                        </p>
                                        <p>
                                            I <strong> love </strong> learning, in particular I enjoy learning languages
                                            as of right now I'm spending all my time on Arabic but you can see my notes
                                            under the "language section"
                                        </p>
                                    </p>
                                </div>
                        </div>
                    </div>
                </Container>
                <Container className={"p-2 text-dark"}>
                    <div className={"card-deck"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Instagram Automation </h5>
                                <p className="card-text">
                                    <p> I am working on an Instagram Automation program that autonomously and naturally
                                        grows instagram accounts. Currently the program is being tested on the account
                                        <a href={"https://www.instagram.com/travel.manic/"}> travel.manic</a>.
                                    </p>

                                    <p>
                                        The program uses Selinium on Python to interact with the instagram webpage. The
                                        program currently is not finished but the final project's progress will be recorded
                                        and documented on this website.
                                    </p>

                                    <p>
                                        If you'd like to keep track of the progress of these bots you can follow the following
                                        instagram accounts.
                                    </p>

                                    <ul>
                                        <li><a href={"https://www.instagram.com/travel.manic/"}> travel.manic</a></li>
                                        <li><a href={"https://www.instagram.com/car.manic/"}> car.manic</a></li>
                                        <li><a href={"https://www.instagram.com/elijahahmad__/"}> elijahahmad__</a> 	&#60;-- (personal account)</li>

                                    </ul>

                                </p>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0">
                            <div>
                                <p>
                                    <Image src={require("../../img/instagramPhoto.png")} fluid />
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;