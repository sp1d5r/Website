// Navigation bar for the web application.
/*
    Attributes:
    - Contains basic navigation bar: Done
    - Contains support to mobile devices: Done
    - Uses this.state.currentMenuItem to get active link (later be used to get jumbotron image) TODO://

    constants can be declared in react using const
 */
import React, { Component } from "react";
import  "react-bootstrap";
import "../../css/footer.css"


class Footer extends React.Component {

    render() {
        const footerStyle = {
            font: "Raleway, sans-serif",
            color: "black",
            width: "100%",
            display: "inline-block",
            margin: "0px",
            padding: "0px",
            backgroundColor: "#BABABA",
            height: "70px",
        };

        const paraStyle = {
            paddingLeft: "20px",
            fontSize: "0.9em",
            color: "white",
            lineHeight: "70px",
            letterSpacing: "1px",
        };

        return (
                <footer style={footerStyle} className={"footer sticky-bottom footer"}>
                    <div className="copyright">
                        <p style={paraStyle}>Copyright 2020 - Almaz Ahmad</p>
                    </div>
                    <div className="social" >
                        <a href="#/contact" className={"support footerLinks"}>Contact Me</a>
                        <a href="https://www.facebook.com/elijah.ahmad.71" className={"face footerLinks"}>f</a>
                        <a href="https://twitter.com/sp1d5r_" className="tweet footerLinks">t</a>
                        <a href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/" className="linked footerLinks">in</a>
                    </div>
                </footer>
        );
    }
}

export default Footer;
