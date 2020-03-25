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
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/notes">Notes</a></li>
                        <li className="breadcrumb-item"><a href="#">Arabic</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Content</li>
                    </ol>
                </nav>
                <h1>Arabic</h1>
                <br/>
                    <h2>Contents Page</h2>
                    <p>These sets of notes will cover the following topics:</p>
                    <ol>
                        <li><a href="/alphabet.html">The Alphabet</a></li>
                        <li><a href="/greeting-and-intro.html">Greetings and Introductions</a></li>
                        <li><a href="/family.html">Family</a></li>
                        <li><a href="/jobs.html">Jobs</a></li>
                        <li><a href="/describing-things.html">Describing Things</a></li>
                        <li><a href="/locating-things.html">Location of Things</a></li>
                        <li><a href="/places.html">Places</a></li>
                        <li><a href="/countries-and-nationality.html">Countries and Nationality</a></li>
                        <li><a href="/counting.html">Counting</a></li>
                        <li><a href="/plural-and-dual.html">Plural and Dual</a></li>
                        <li><a href="/colors.html">Colors</a></li>
                        <li><a href="/eating-and-drinking.html">Eating and Drinking</a></li>
                        <li><a href="/past-verbs-and-yesterday.html">Past Verbs and Yesterday</a></li>
                        <li><a href="/daily-routines.html">Daily Routines</a></li>
                        <li><a href="/comparing-things.html">Comparing Things</a></li>
                        <li><a href="/education-and-business.html">Education and Business</a></li>
                        <li><a href="/the-future.html">The Future</a></li>
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