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
                    </div>
                </Jumbotron>


                <Container>
                    <p> Body of the Home Page</p>
                    <p> Body of the Home Page</p>
                </Container>

            </div>
        );
    }
}

export default Home;