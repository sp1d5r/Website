import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class alphabet extends Component {
    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/notes">Notes</a></li>
                        <li className="breadcrumb-item"><a href="/#/notes/arabic/arabic-contents">Arabic</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Alphabet</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default alphabet;