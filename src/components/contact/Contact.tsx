import React from 'react';
import {Alert, Container, Image, Jumbotron, Card, CardDeck} from "react-bootstrap";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron fluid className={"bg-white p-0"}>
                    <Image src={require("../../img/landing2.jpg")} fluid />
                    <div className="card-body bg-white text-center text-dark mb-3 navgrad">
                        <h3 className="card-title h3 my-4"><strong>Contact Information</strong></h3>
                        <p className="card-text py-0">below is my contact information, please give 1-2 days for a response</p>
                    </div>
                </Jumbotron>

                <div className="container">
                    <h1> My Contact Information </h1>
                    <h5> My Emails:</h5>
                    <p> Work/School Email:</p>
                    <div className="alert-primary text-center"> aa1719@ic.ac.uk</div>
                    <p> Personal Email: </p>
                    <div className="alert-primary text-center"> ElijahAhmad03@gmail.com</div>
                    <br/>
                        <p> Employment Status :</p>
                        <div className="alert-success text-center"> Available</div>
                        <br/>
                            <p> Social Media </p>
                            <div className={"d-flex justify-content-center"}>
                                <a href="https://www.facebook.com/elijah.ahmad.71">
                                    <button type="button" className="btn btn-fb indigo lighten-2"><i
                                        className="fab fa-facebook-f pr-1"></i> Facebook
                                    </button>
                                </a>
                                <a href="https://twitter.com/sp1d5r_">
                                    <button type="button" className="btn btn-tw teal lighten-2"><i
                                        className="fab fa-twitter pr-1"></i> Twitter
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/">
                                    <button type="button" className="btn btn-li blue accent-1"><i
                                        className="fab fa-linkedin-in pr-1"></i> Linkedin
                                    </button>
                                </a>
                                <a href="https://github.com/sp1d5r">
                                    <button type="button" className="btn btn-git grey lighten-1"><i
                                        className="fab fa-github pr-1"></i> Github
                                    </button>
                                </a>
                                <a>
                                    <button type="button" className="btn btn-reddit"><i
                                        className="fab fa-reddit-alien pr-1"></i> Reddit
                                    </button>
                                </a>
                                <a href="https://stackoverflow.com/users/12626619/elijah-ahmad">
                                    <button type="button" className="btn btn-so deep-orange lighten-1">
                                        <i className="fab fa-stack-overflow pr-1"></i> Stack Overflow
                                    </button>
                                </a>
                                <a href="https://www.snapchat.com/add/elijah.ahmad">
                                    <button type="button" className="btn btn-so yellow lighten-2">Snapchat</button>
                                </a>
                            </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>);
    }
}

export default Contact;