// Notes Homepage for the web application
/*

 */
import React, { Component } from "react";
import {Alert, Container, Image, Jumbotron, Card, CardDeck} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProjectsHome extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className={"bg-white p-0"}>
                    <Image src={require("../../img/landing1.jpg")} fluid />
                    <div className="card-body bg-white text-center text-dark mb-3 navgrad">
                        <h3 className="card-title h3 my-4"><strong>Personal Projects</strong></h3>
                        <p className="card-text py-0">a collection of my personal projects</p>
                        <Link className="btn btn-primary" href="https://github.com/sp1d5r" role="button"
                              to={"https://github.com/sp1d5r"}>Github</Link>
                    </div>
                </Jumbotron>

                <Container>
                    <p> Below are a collection of projects I have worked on for companies, or created in my free time.
                        Each project is analysed in a different way. You might notice later projects are well written and far more
                        documented than earlier ones. This is just documenting my transition as a developer.
                    </p>
                    <br/>

                    <Card className={"text-center"}>
                        <Card.Header>Most Recent Project</Card.Header>
                        <Card.Body>
                        <Card.Title>Mechanics Calculator App</Card.Title>
                        <Card.Text>
                            The breakdown of my first commercial application which gained 100+ downloads without any
                            marketing
                        </Card.Text>
                            <Link to={"${process.env.PUBLIC_URL}/projects/mechanics-app"} className={"btn btn-primary mx-2"}>Take me there</Link>
                            <a href="https://github.com/sp1d5r/Mechanics-App" className="btn btn-primary">Source
                                Code</a>
                        </Card.Body>
                        <Card.Footer className={"text-muted"}>Jan 28, 2020</Card.Footer>
                    </Card>



                    <br/>

                    <br/>
                        <br/>

                            <div className="card-deck">
                                <div className="card border-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title">Cobweb</h5>
                                        <p className="card-text"> A programming language developed in Java, Which
                                            implements a tokeniser,
                                            parser, and block separation software.</p>
                                        <div className="alert alert-secondary">Discontinued</div>
                                        <p className="card-text"><small className="text-muted">May 13, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="projects/cobweb"
                                               className="btn btn-primary btn-block"> Cobweb </a>
                                            <a href="https://github.com/sp1d5r/CobWeb"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title">General BlockChain</h5>
                                        <p className="card-text">A simple BlockChain created in python using the SHA256
                                            HASH and 64 length hex character length</p>
                                        <div className="alert alert-secondary">Completed</div>
                                        <p className="card-text"><small className="text-muted">Jul 8, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="projects/general-blockchain"
                                               className="btn btn-primary btn-block"> General Blockchain </a>
                                            <a href="https://github.com/sp1d5r/General-BlockChain"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title">Quantum Computing Python</h5>
                                        <p className="card-text"> A program exploring the Quantum Register and Qubits -
                                            Brief introduction to quantum computing </p>
                                        <div className="alert alert-secondary">Progressive</div>
                                        <p className="card-text"><small className="text-muted">Jun 2, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="projects/quantum-computing"
                                               className="btn btn-primary btn-block"> Quantum Computing </a>
                                            <a href="https://github.com/sp1d5r/Quantum-Computing-Python"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                                <div className="card-deck">
                                    <div className="card border-secondary">
                                        <div className="card-body">
                                            <h5 className="card-title">Pearson Active Learn PDF Maker</h5>
                                            <p className="card-text"> A web-crawler made in Ruby that converts your
                                                digital textbooks into PDF's
                                                available to you even when you're offline</p>
                                            <div className="alert alert-secondary">Discontinued</div>
                                            <p className="card-text"><small className="text-muted">May 28, 2018</small>
                                            </p>
                                            <div className="card-footer bg-transparent">
                                                <a href="projects/pearson-pdf-maker"
                                                   className="btn btn-primary btn-block"> PDF Maker </a>
                                                <a href="https://github.com/sp1d5r/Pearsons-Active-Learn-PDF-Screenshoter"
                                                   className="btn btn-primary btn-block"> Link to Source code</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-secondary">
                                        <div className="card-body">
                                            <h5 className="card-title">Computing Systems Projects</h5>
                                            <p className="card-text">Combining ideas from the Imperial Coursed CO112,
                                                CO120.1, CO120.2.
                                                Programmed in Haskell and Java</p>
                                            <div className="alert alert-secondary">Progress</div>
                                            <p className="card-text"><small className="text-muted"> Jan 20, 2020</small>
                                            </p>
                                            <div className="card-footer bg-transparent">
                                                <a href="projects/computer-system-projects"
                                                   className="btn btn-primary btn-block"> Computer System Projects</a>
                                                <a href="https://github.com/sp1d5r/Computer-Systems-Projects"
                                                   className="btn btn-primary btn-block"> Link to Source code</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-secondary">
                                        <div className="card-body">
                                            <h5 className="card-title">MicroBlocks</h5>
                                            <p className="card-text"> Group Project: Making physical blocks to represent
                                                And, Or, Not gates to
                                                make binary arithmetic more fun for children</p>
                                            <div className="alert alert-secondary">Completed</div>
                                            <p className="card-text"><small className="text-muted">May 8, 2018</small>
                                            </p>
                                            <div className="card-footer bg-transparent">
                                                <a href="projects/microblocks"
                                                   className="btn btn-primary btn-block"> MicroBlocks </a>
                                                <a href="https://github.com/sp1d5r/MicroBlocks"
                                                   className="btn btn-primary btn-block"> Link to Source code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </Container>

            </div>
        );
    }
}

export default ProjectsHome;