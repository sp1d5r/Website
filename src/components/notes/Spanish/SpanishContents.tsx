import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class SpanishContents extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#/">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/notes/">Notes</a></li>
                        <li className="breadcrumb-item"><a href="#/notes/spanish/spanish-contents">Spanish</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Content</li>
                    </ol>
                </nav>
                <h1>Spanish</h1>
                <br/>
                <h2>Contents Page</h2>
                <p> Not Finished</p>
                <p>These sets of notes will cover the following topics:</p>
                <ol>
                    <li> Basics
                        <ul>
                            <li><a href={"#/spanish/pronouns-verbs-and-nouns"}>Pronouns, Verbs, and Nouns</a></li>
                            <li>Adjcetives, and Gender</li>
                        </ul>
                    </li>
                </ol>


                <h3>Credit</h3>
                <p> These notes were supposed to have been made for my GCSE Spanish classes. Unfortunately during my
                    GCSE's i didn't really appreciate school or education as much as i should've. I never made notes
                    in my classes.
                    <br/>
                    <br/>
                    My spanish coursework grade came back at a U. I learnt all the spanish i know now
                    in three days before the exam. I got an A* in the listening, reading and writing exam. this boosted
                    my average up to a C. I wrote some notes a few weeks after my GCSE's and externalised them into
                    web format in 2020.
                    <br/>
                    <br/>
                    I must shout out my Spanish Teacher (for the diarrhea stories) and Kishan (for making spanish lessons
                    funny).
                </p>
            </div>
        );
    }
}

export default SpanishContents;