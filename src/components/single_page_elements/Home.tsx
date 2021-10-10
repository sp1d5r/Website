import React, { Component } from "react";
import {Jumbotron, Container, Image, Row, Col} from "react-bootstrap";
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
                        <p className="card-text py-0">A third year computer science student studying at</p>
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
                                        <p><strong>Hello!</strong> I am Elijah (Al-Maz) Ahmad, I am a third year
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
                                            <li> Maintaining this website,</li>
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
                                            <strong> integrity</strong>.
                                        </p>
                                        <p>
                                            I <strong> love </strong> learning, in particular I enjoy learning languages
                                            as of right now I'm spending all my time on Arabic, but i have a collection
                                            of notes for other languages in the Notes page.
                                        </p>
                                    </p>
                                </div>
                        </div>
                    </div>
                </Container>
                <Container className={"p-2 text-dark"}>
                    <h2 className={"bg-white text-dark text-center p-2"}><u>My Highlight Real</u></h2>
                    <br/>
                    <div className={"card-deck bg-transparent"} >
                        <div className={"card justify-content-center bg-transparent"} style={{border:"none"}}>
                            <div className={"card-group justify-content-center"} >
                                <Row className={"justify-content-center "} >
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image   src={require("../../img/mech_calculator.jpg")} thumbnail />
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image src={require("../../img/stats_calculator.jpg")} thumbnail />

                                        </div>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-center"}>
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image src={require("../../img/ice_runner.jpg")} thumbnail />

                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image src={require("../../img/impossible_cube.jpg")} thumbnail />

                                        </div>
                                    </Col>
                                </Row>
                                <Row className={"justify-content-center"}>
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image src={require("../../img/faded.jpg")} thumbnail />

                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div style={{backgroundColor:"white"}}>
                                            <Image src={require("../../img/tiny_universe.jpg")} thumbnail />

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">My Apps </h5>
                                <p className="card-text">
                                    <p> I have developed and published over 12 apps. These apps were made back in 2017-18
                                        when I was 17. These apps massed thousands of downloads, 5,000 to be exact, but I
                                        am very proud of them.
                                    </p>

                                    <p>
                                        There were a variety of games and apps. Here are my favorites:
                                    </p>
                                    <ul>
                                        <li>Mechanics App - helper for my A-Level Mechanics friends</li>
                                        <li>Statistics App - helper for my A-Level Statistics friends</li>
                                        <li>Ice Runner - The first game I made </li>
                                        <li>Impossible Cube - the first minimalistic game I made</li>
                                        <li>Faded - my personal favorite game (very addictive)</li>
                                        <li>Tiny Universe - My first platformer with graphics and audio designed</li>
                                    </ul>

                                    <p>
                                        These apps were built on xcode, using swift and objective-c. The designs went
                                        from clunky to minimalistic. I also began exploring colour pallets and using
                                        simple shapes such as squares, circles and triangles.
                                    </p>

                                    <p>
                                        I also monetized these app, I used AdMob and HeyZap (now fibre) to place ads on
                                        my games. I made a total of £45 from publishing these apps. It wasn't a lot but
                                        considerably good due to the fact I had no marketing.
                                    </p>
                                    <p>
                                        I plan on returning to mobile app development soon, but I want to spend some time
                                        exploring different avenues before I come back to mobile development.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
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
                    <br/>
                    <div className={"card-deck"}>
                        <div className="card bg-transparent border-0">
                            <div>
                                <p>
                                    <Image src={require("../../img/mockup.png")} fluid />
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pegasus Education </h5>
                                <p className="card-text">
                                    <p> Education is free. But it doesn't mean it's fair. Growing up without any educated
                                        parents, showed me how hard it can be learning without proper guidance. My
                                        teachers were great but I wanted to be the best in the country, which isn't really
                                        an option at low budget public schools.
                                    </p>

                                    <p>
                                        That's where pegasus comes into play. It uses spaced repetition and my own Artificial
                                        Intelligence software to predict when students will forget topics and reminds them.
                                        It is a technique used by Anki.
                                    </p>

                                    <p>
                                        I've been working on this for the last 2 years but balancing school, work and this
                                        has been next to impossible. So that's the situation. If you wanna check out the website
                                        <a href={"https://pegasus-education.herokuapp.com"}> Pegasus Education </a>
                                    </p>

                                    <p>
                                        The app will be funded on advertisements and 50% of all proceeds will be sent to
                                        CoachBright. The other 50% will be kept for course creation. The app is built on
                                        react-native and the source code will be released soon.
                                    </p>

                                    <p>
                                        Free education for everyone. Forever.
                                    </p>
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


/*
<div className={"card"} style={{width: "150px", height: "200px"}}>
                                <Image className="center-image" src={require("../../img/mech_calculator.jpg")} style={{width: "130px", height: "130px"}}/>
                                <p className={"card-footer"}>
                                    Mech Calc
                                </p>
                            </div>
                            <div className={"card justify-content-center"} style={{width: "150px", height: "200px"}}>
                                <Image className="center-image" src={require("../../img/stats_calculator.jpg")} style={{width: "130px", height: "130px"}} />
                                <p className={"card-footer"}>
                                    Stats Calc
                                </p>
                            </div>
                            <div className={"card justify-content-center"} style={{width: "150px", height: "200px"}}>
                                <Image className="center-image bg-transparent" src={require("../../img/ice_runner.jpg")} style={{width: "130px", height: "130px"}}/>
                                <p className={"card-footer"}>
                                    Ice Runner
                                </p>
                            </div>
                        </div>
                            <br/>
                            <div className={"card-group"}>
                            <div className={"card justify-content-center"} style={{width: "150px", height: "200px"}} >
                                <Image className="center-image" src={require("../../img/impossible_cube.jpg")} style={{width: "130px", height: "130px"}}/>
                                <p className={"card-footer"}>
                                    Impossible Cube
                                </p>
                            </div>
                            <div className={"card justify-content-center"} style={{width: "150px", height: "200px"}} >
                                <Image className="center-image" src={require("../../img/faded.jpg")} style={{width: "130px", height: "130px"}}/>
                                <p className={"card-footer"}>
                                    Faded
                                </p>
                            </div>
                            <div className={"card d-flex justify-content-center"} style={{width: "150px", height: "200px"}} >
                                <Image className="center-image" src={require("../../img/tiny_universe.jpg")} style={{width: "130px", height: "130px"}}/>
                                <p className={"card-footer align-text-center"}>
                                    Tiny Universe
                                </p>
                            </div>
 */
