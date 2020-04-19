import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class arabic_contents extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/#/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/notes/">Notes</a></li>
                        <li className="breadcrumb-item"><a href="/#/notes/arabic/arabic-contents">Arabic</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Content</li>
                    </ol>
                </nav>
                <h1>Arabic</h1>
                <br/>
                    <h2>Contents Page</h2>
                    <p>These sets of notes will cover the following topics:</p>
                    <ol>
                        <li><a href="#/projects/mechanics-app">The Alphabet</a></li>
                        <li><a href="#/notes/arabic/greeting-and-intro">Greetings and Introductions</a></li>
                        <li><a href="#/notes/arabic/family">Family</a></li>
                        <li><a href="#/notes/arabic/jobs">Jobs</a></li>
                        <li><a href="#/notes/arabic/describing-things">Describing Things</a></li>
                        <li><a href="#/notes/arabic/locating-things">Location of Things</a></li>
                        <li><a href="#/notes/arabic/places">Places</a></li>
                        <li><a href="#/notes/arabic/countries-and-nationality">Countries and Nationality</a></li>
                        <li><a href="#/notes/arabic/counting">Counting</a></li>
                        <li><a href="#/notes/arabic/plural-and-dual">Plural and Dual</a></li>
                        <li><a href="#/notes/arabic/colors">Colors</a></li>
                        <li><a href="#/notes/arabic/eating-and-drinking">Eating and Drinking</a></li>
                        <li><a href="#/notes/arabic/past-verbs-and-yesterday">Past Verbs and Yesterday</a></li>
                        <li><a href="#/notes/arabic/daily-routines">Daily Routines</a></li>
                        <li><a href="#/notes/arabic/comparing-things">Comparing Things</a></li>
                        <li><a href="#/notes/arabic/education-and-business">Education and Business</a></li>
                        <li><a href="#/notes/arabic/the-future">The Future</a></li>
                    </ol>

                    <h3>Credit</h3>
                    <p> these notes were created for the A1 level of the Common European Framework of Reference (CEFR),
                        Notes
                        were taking during Imperial Horizons course along with the book: Mastering Arabic 1, Jane
                        Wightwick & Mahmoud Gaafar
                    </p>
            </div>
        );
    }
}

export default arabic_contents;