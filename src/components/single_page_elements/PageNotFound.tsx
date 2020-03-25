import React, { Component } from "react";
import {Row, Col, Card, CardDeck, Image, Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class PageNotFound extends Component {
    render() {
        return (
            <Container className={"h-100"}>
                <br/>
                <br/>
                <br/>
                <h2><u>Error 404</u></h2>
                <CardDeck>
                    <Card>
                        <Image className={"w-100"} src={require("../../img/error.jpg")}/>
                    </Card>
                    <Card className={"justify-content-center  align-items-center"}>
                        <Card.Body>
                            <Card.Title>ERROR 404</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">page cannot be found</Card.Subtitle>
                            <Card.Text>
                                The page you have searched for/been directed to does not exist. This could be
                                because it is currently under development, or the URL you entered has a typo in it.
                            </Card.Text>
                            <Card.Text>
                                If you think you have found an error in functionality, please contact me to get
                                this error fixed as soon as possible.
                            </Card.Text>
                            <Card.Link href="/">Home</Card.Link>
                            <Card.Link href="/Contact">Contact</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </Container>
        );
    }
}

export default PageNotFound;