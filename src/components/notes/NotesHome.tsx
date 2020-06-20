// Notes Homepage for the web application
/*

 */
import React, { Component } from "react";
import {Alert, Container, Image, Jumbotron, Card, CardDeck} from "react-bootstrap";
import {Link} from "react-router-dom";

class NotesHome extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className={"bg-white p-0"}>
                    <Image src={require("../../img/notesLanding.jpg")} fluid />
                    <div className="card-body bg-white text-center text-dark mb-3 navgrad">
                        <h3 className="card-title h3 my-4"><strong>My Notes</strong></h3>
                        <p className="card-text py-0"> For personal collection of language and student notes.</p>
                        <p className="card-text py-0">Imperial notes are only made available to attending Imperial
                            Alumni</p>
                    </div>
                </Jumbotron>

                <Container>
                        <h1> Imperial Notes </h1>
                            <p>
                                A selection of notes available to Imperial students. You must sign in to gain access to
                                these notes
                            </p>
                            <p className="alert-danger">
                                Notes section is currently unavailable, for queries email me at aa1719@imperial.ac.uk
                            </p>

                        <br/>
                        <br/>

                        <h1>Language Notes </h1>
                    <Card>
                        <Card.Header>
                            Quote of the day
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>Il ne faut pas attendre d’être parfait pour commencer quelque chose de bien.</p>
                                <div className="blockquote-footer">
                                    L’Abbé Pierre,<cite title="Source Title">Don't
                                    wait to be perfect to start something good</cite>
                                </div>
                            </blockquote>
                        </Card.Body>
                    </Card>

                    <br/>
                        <p> A selection of notes on relevant topics to look over whenever I want to refresh my memory on a particular
                            topic or subject matter in a given language.
                        </p>
                        <p> Please note this is not intended to be used as a textbook and the information provided will most likely
                            not help you learn or gain proficiency in the following languages. They are only here to help me keep
                            track of vocabulary I have learnt, and as a record for me to look back on as I grow old.
                        </p>

                    <ul>
                        <li> Spanish <span className="badge badge-danger">7%</span></li>
                        <li> French <span className="badge badge-danger">0%</span></li>
                        <li> Arabic <span className="badge badge-danger">0%</span></li>
                        <li> German <span className="badge badge-danger">0%</span></li>
                        <li> Italian <span className="badge badge-danger">0%</span></li>
                    </ul>

                    <p className="alert-primary"> Please select on an appropriate language to take you to the
                        corresponding page</p>
                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img src={require("../../img/Arabic.jpg")} width="100%"/>
                            <div className="card-body">
                            <h5 className="card-title">Arabic 🇸🇦 </h5>
                            <p className="card-text">A collection of my Arabic notes (2019-2020)</p>
                            <div className="alert alert-secondary">Under Construction</div>
                            <p className="card-text"><small className="text-muted">Mar 24, 2020</small></p>
                            <div className="card-footer bg-transparent">
                                <a href="#/arabic/arabic-contents" className="btn btn-primary btn-block"> Link
                                    To Arabic Section </a>
                            </div>
                            </div>
                        </Card>

                        <Card>
                            <Card.Img src={require("../../img/French.jpg")} width="100%"/>
                            <div className="card-body">
                                <h5 className="card-title">French 🇫🇷 </h5>
                                <p className="card-text">A collection of my French notes (2019-2020)</p>
                                <div className="alert alert-secondary">Under Construction</div>
                                <p className="card-text"><small className="text-muted">Mar 24, 2020</small></p>
                                <div className="card-footer bg-transparent">
                                    <a href="#/notes/french/french-contents" className="btn btn-primary btn-block"> Link
                                        To French Section </a>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <Card.Img src={require("../../img/German.jpg")} width="100%"/>
                            <div className="card-body">
                                <h5 className="card-title">German 🇩🇪 </h5>
                                <p className="card-text">A collection of my German notes (2020-2021)</p>
                                <div className="alert alert-secondary">Under Construction</div>
                                <p className="card-text"><small className="text-muted">Mar 24, 2020</small></p>
                                <div className="card-footer bg-transparent">
                                    <a href="#/notes/german/german-contents" className="btn btn-primary btn-block"> Link
                                        To German Section </a>
                                </div>
                            </div>
                        </Card>
                    </CardDeck>
                    <br/>
                    <CardDeck>
                        <Card>
                            <Card.Img src={require("../../img/spanish.jpg")} width="100%"/>
                            <div className="card-body">
                                <h5 className="card-title">Spanish 🇪🇸</h5>
                                <p className="card-text">A collection of my Spanish notes (2016-2017)</p>
                                <div className="alert alert-secondary">Under Construction</div>
                                <p className="card-text"><small className="text-muted">Mar 24, 2020</small></p>
                                <div className="card-footer bg-transparent">
                                    <a href="#/notes/spanish/spanish-contents" className="btn btn-primary btn-block"> Link
                                        To Spanish Section </a>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <Card.Img src={require("../../img/Italian.jpg")} width="100%"/>
                            <div className="card-body">
                                <h5 className="card-title">Italian 🇮🇹</h5>
                                <p className="card-text">A collection of my Italian notes (2021-2022)</p>
                                <div className="alert alert-secondary">Under Construction</div>
                                <p className="card-text"><small className="text-muted">Mar 24, 2020</small></p>
                                <div className="card-footer bg-transparent">
                                    <Link to={"notes/italian"}/>
                                    <a href="#/notes/italian/italian-contents" className="btn btn-primary btn-block"> Link
                                        To Italian Section </a>
                                </div>
                            </div>
                        </Card>

                        <Card>

                        </Card>

                    </CardDeck>
                </Container>

            </div>
        );
    }
}

export default NotesHome;