import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class AdjectivesAndAbbreviations extends Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Adjectives + Abbreviations</li>
                    </ol>
                </nav>
                <h1>1.2) Adjectives + Abbreviations</h1>
                <br/>
                <h2>Adjectives</h2>
                <h3>Adjective Gender</h3>
                <p>In Spanish, the endings of adjectives are different depending on if the noun they describe is
                    masculine/feminine and if it's singular/plural. </p>

                <p>Masculine Noun (o/os):</p>
                <ul>
                    <li>The red dog - El perr<span style={{color: "#216e9c"}}>o</span> roj<span style={{color: "#216e9c"}}>o</span></li>
                    <li>The red dogs - El perr<span style={{color: "#216e9c"}}>os</span> roj<span style={{color: "#216e9c"}}>os</span></li>
                </ul>
                <p>Feminine Nouns (a/as):</p>
                <ul>
                    <li>The red t-shirt - La camiset<span style={{color: "#216e9c"}}>o</span> roj<span style={{color: "#216e9c"}}>a</span></li>
                    <li>The red t-shirts - Las camiset<span style={{color: "#216e9c"}}>as</span> roj<span style={{color: "#216e9c"}}>as</span></li>
                </ul>

                <h3>Adjective Positioning</h3>
                <p>Most adjectives come after the noun (or thing) that you are describing. </p>
                <ul>
                    <li>My old friend - Mi amigo <span style={{color: "#216e9c"}}>viejo </span></li>
                    <li>My old teacher - Mi profesora <span style={{color: "#216e9c"}}>vieja </span></li>
                    <li>The house is small - La casa es <span style={{color: "#216e9c"}}>pequena</span></li>
                    <li>The house is big - La casa es <span style={{color: "#216e9c"}}>grande</span></li>
                </ul>

                <h3>Abbreviations</h3>
                <ul>
                    <li>EEUU - Estados Unidos - United States,</li>
                    <li>Avda - Avenida - Avenue,</li>
                    <li>IVA - VAT,</li>
                    <li>Renfe/RENFE - Spanish railways,</li>
                    <li>EI AVE - high speed train,</li>
                    <li>C/ - calle - street,</li>
                    <li>Sr - señor - Mr,</li>
                    <li>Sra - señora - Mrs,</li>
                    <li>Srta - señorita - Miss,</li>
                    <li>Sta - santa - St.</li>
                </ul>

                <p><strong>Examples</strong></p>
                <ul>
                    <li>Estimado sr; gracias por su servicio excelente - Dear Sir; thank you for your excellent service</li>
                    <li>Donald Trump es presidente de los EEUU - Donald Trump is president of the United States</li>
                    <li>El precio incluya el IVA - The price includes VAT.</li>
                </ul>
            </div>
        );
    }
}

export default AdjectivesAndAbbreviations;