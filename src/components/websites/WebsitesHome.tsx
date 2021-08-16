// Notes Homepage for the web application
/*

 */
import React, { Component } from "react";
import {Alert, Container, Image, Jumbotron, Card, CardDeck} from "react-bootstrap";
import {Link} from "react-router-dom";

class WebsitesHome extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className={"bg-white p-0"}>
                    <Image src={require("../../img/webimg.jpg")} fluid />
                    <div className="card-body bg-white text-center text-dark mb-3 navgrad">
                        <h3 className="card-title h3 my-4"><strong>Websites</strong></h3>
                        <p className="card-text py-0">a collection of my personal websites</p>
                        <a className="btn btn-primary" href="https://github.com/sp1d5r" role="button">Github</a>
                    </div>
                </Jumbotron>

                <Container>
                    <p> Okay, so I've worked on a ton of web pages in my time, here are some of my best work! (Or worst
                        work, or stuff i found funny)
                    </p>
                    <br/>

                    <Card className={"text-center"}>
                        <Card.Header>Most Recent Project</Card.Header>
                        <img src={require("../../img/Quandora.jpg")} className="card-img-top" alt="..." />
                        <Card.Body>
                        <Card.Title>Quandora</Card.Title>
                        <Card.Text>
                            This is a platform for people wanting to get into algorithmic trading but don't know how to code.
                        </Card.Text>
                            <div className="alert alert-success">Working</div>
                            <a href="https://quandora-quant.herokuapp.com" className={"btn btn-primary mx-2"}>Take me there</a>
                            <a href="https://gitlab.doc.ic.ac.uk/g205001039/quandora" className="btn btn-primary">Source
                                Code</a>
                        </Card.Body>
                        <Card.Footer className={"text-muted"}>Jan 28, 2020</Card.Footer>
                    </Card>



                    <br/>

                    <br/>
                        <br/>

                            <div className="card-deck">
                                <div className="card border-secondary">
                                    <img src={require("../../img/websites.jpg")} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">COVID-19 Tracker</h5>
                                        <p className="card-text"> A COVID-19 tracker which makes API requests to
                                        get all the covid data.
                                        </p>
                                        <div className="alert alert-success">Working</div>
                                        <p className="card-text"><small className="text-muted">May 13, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="https://covid-tracker-program.herokuapp.com"
                                               className="btn btn-primary btn-block"> COVID Tracker </a>
                                            <a href="https://github.com/sp1d5r/covid-19-webapp"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-secondary">
                                    <img src={require("../../img/websites1.jpg")} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Instamation v1</h5>
                                        <p className="card-text">A python webapp that uses selenium automation

                                        </p>
                                        <div className="alert alert-warning">Local Only</div>
                                        <p className="card-text"><small className="text-muted">Jul 8, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="https://instamation-v1.herokuapp.com"
                                               className="btn btn-primary btn-block"> Instamation v1 </a>
                                            <a href="https://github.com/sp1d5r/InstaMation"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-secondary">
                                    <img src={require("../../img/website2.jpg")} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Instamation v2</h5>
                                        <p className="card-text"> An update to the instamation v1, this time using react
                                        and mongo db. So far it uses selenium too, so make sure to use local version.
                                        </p>
                                        <div className="alert alert-danger">Work in Progress</div>
                                        <p className="card-text"><small className="text-muted">Jun 2, 2018</small></p>
                                        <div className="card-footer bg-transparent">
                                            <a href="https://instamation.herokuapp.com/"
                                               className="btn btn-primary btn-block"> Instamation v2 </a>
                                            <a href="https://github.com/sp1d5r/instagram-automation"
                                               className="btn btn-primary btn-block"> Link to Source code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                                <div className="card-deck">
                                    <div className="card border-secondary">
                                        <img src={require("../../img/websites4.jpg")} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Is My Dad Back Yet?</h5>
                                            <p className="card-text"> Is my dad back yet 😔 </p>
                                            <div className="alert alert-danger">Broken</div>
                                            <p className="card-text"><small className="text-muted">May 28, 2018</small>
                                            </p>
                                            <div className="card-footer bg-transparent">
                                                <a href="https://ismydadbackyet.com/"
                                                   className="btn btn-primary btn-block"> ISMYDADBACKYET </a>
                                                <a href="https://github.com/sp1d5r/Pearsons-Active-Learn-PDF-Screenshoter"
                                                   className="btn btn-primary btn-block"> Link to Source code</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-secondary">
                                        <img src={require("../../img/websites3.jpg")} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Pegasus Education</h5>
                                            <p className="card-text">
                                                A education start up that delivers A-Level and GCSE content to kids.
                                            </p>
                                            <div className="alert alert-warning">In Progress</div>
                                            <p className="card-text"><small className="text-muted"> Jan 20, 2020</small>
                                            </p>
                                            <div className="card-footer bg-transparent">
                                                <a href="https://camo.githubusercontent.com/106a0dfc5526128b990bf64ed48353eb09d203ae77217d784eb283aef6fb4892/68747470733a2f2f696d672e736869656c64732e696f2f776562736974653f6c6162656c3d50656761737573253230456475636174696f6e2675705f636f6c6f723d626c75652675705f6d6573736167653d496e25323050726f6772657373267374796c653d666f722d7468652d62616467652675726c3d6874747073253341253246253246696e7374616d6174696f6e2e6865726f6b756170702e636f6d"
                                                   className="btn btn-primary btn-block"> Pegasus</a>
                                                <a href="https://github.com/sp1d5r/Computer-Systems-Projects"
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

export default WebsitesHome;
