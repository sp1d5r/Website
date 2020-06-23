import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class PronounsVerbsAndNouns extends Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Pronouns, Verbs, and Nouns</li>
                    </ol>
                </nav>
                <h1>1.1) Pronouns, Verbs, and Nouns</h1>
                <br/>
                <h2>Pronouns</h2>
                <p>Personal pronouns such as I, he, she, you, etc, are important to understand how to use verbs.
                    Below is a table of pronouns and their appropriate verb endings </p>

                <p><strong>Personal Pronouns</strong></p>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>English Pronouns</th>
                        <th>Spanish Pronouns</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>I</td>
                        <td>yo</td>
                    </tr>
                    <tr>
                        <td>You</td>
                        <td>tu</td>
                    </tr>
                    <tr>
                        <td>He, She, You</td>
                        <td>el, ella, usted</td>
                    </tr>
                    <tr>
                        <td>We</td>
                        <td>nosotros</td>
                    </tr>
                    <tr>
                        <td>You All (Spain)</td>
                        <td>vosotros</td>
                    </tr>
                    <tr>
                        <td>They(M), They(F), You All</td>
                        <td>ellos, ellas, ustedes</td>
                    </tr>
                    </tbody>
                </table>

                <br/>

                <h2>Verbs</h2>
                <p>Verbs change depending on who is using them.</p>
                <p>In English we use I, you, he, she, etc, to dhow the person that the verbs refers to. in Spanish the
                    verb endings show who is doing what. It's not necessary to use the personal pronouns (I/he/you). </p>
                <p><strong>Example 1 - hablar (to talk)</strong></p>
                <ul>
                    <li>'<span style={{color: "#216e9c"}}>Yo hablo</span>' (I talk) it not usually used.</li>
                    <li>instead we use '<span style={{color: "#216e9c"}}>Hablo</span>'.</li>
                </ul>
                <p>It's important to understand there are three types of verbs, they can end in -ar, -er, -ir. These
                    different types of verbs all have different endings when conjugated. </p>

                <p><strong>Verb Endings</strong></p>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Pronouns</th>
                        <th>Hablar / To Talk</th>
                        <th>Comer / To Eat</th>
                        <th>Viver/ To Live</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Yo (I)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>o</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>o</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>o</span></td>
                    </tr>
                    <tr>
                        <td>Tu (you)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>as</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>es</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>es</span></td>
                    </tr>
                    <tr>
                        <td>El (he), Ella (she)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>a</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>e</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>e</span></td>
                    </tr>
                    <tr>
                        <td>Nos (We)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>amos</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>emos</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>imos</span></td>
                    </tr>
                    <tr>
                        <td>Nos (We)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>amos</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>emos</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>imos</span></td>
                    </tr>
                    <tr>
                        <td>Ellos (they M), Ellas (they F)</td>
                        <td>Habl<span style={{color:"#4d9c44"}}>an</span></td>
                        <td>Com<span style={{color:"#4d9c44"}}>en</span></td>
                        <td>Viv<span style={{color:"#4d9c44"}}>en</span></td>
                    </tr>
                    </tbody>
                </table>

                <h2>The Infinitive</h2>
                <p>The infinitive is the form of the verb that translates as 'to do something' for example 'to speak', 'to walk', or 'to play'.</p>
                <p>The infinitives can be used as a noun:</p>
                <ul>
                    <li>"<span style={{color: "#216e9c"}}>Eating</span> is a necessity" - "<span style={{color: "#216e9c"}}>Comer</span> es una necesidad" </li>
                </ul>
                <p>When two verbs are next to each other the second verb must be an infinitive:</p>
                <ul>
                    <li>"I <span style={{color: "#216e9c"}}>know</span> how to <span style={{color: "#216e9c"}}>speak</span> Spanish" - "Lo <span style={{color: "#216e9c"}}>sé hablar</span> español "</li>
                    <li>"They are not <span style={{color: "#216e9c"}}>able</span> to <span style={{color: "#216e9c"}}>swim</span>" - "Ellos no <span style={{color: "#216e9c"}}>saben nadar</span>"</li>
                </ul>
                <p>After propositions (e.g. of, for, by) we use the infinitive:</p>
                <ul>
                    <li>"We try <span style={{color: "#216e9c"}}>to eat</span> a healthier diet" - "Tratamos de <span style={{color: "#216e9c"}}>comer</span> uni dieta was sana "</li>
                </ul>

                <h2>Nouns</h2>
                <p>Spanish noun endings change depending on if</p>
                <ul>
                    <li>there is one object or it's plural </li>
                    <li>if the noun is masculine or feminine </li>
                </ul>

                <p>Masculine Singular Nouns (o):</p>
                <ul>
                    <li>The summer - El Veran<span style={{color: "#216e9c"}}>o</span></li>
                    <li>The width - El anch<span style={{color: "#216e9c"}}>o</span></li>
                    <li>The piece - El pedaz<span style={{color: "#216e9c"}}>o</span></li>
                </ul>
                <p>Feminine Singular Nouns (a):</p>
                <ul>
                    <li>The fog - La niebl<span style={{color: "#216e9c"}}>a</span></li>
                    <li>The lack/ The error - La falt<span style={{color: "#216e9c"}}>a</span></li>
                    <li>Silver - La plat<span style={{color: "#216e9c"}}>a</span></li>
                </ul>
                <p>Masculine Plural Nouns (os):</p>
                <ul>
                    <li>The guests - Los invitad<span style={{color: "#216e9c"}}>os</span></li>
                    <li>The members - Los miembr<span style={{color: "#216e9c"}}>os</span></li>
                    <li>The risks - Los riesg<span style={{color: "#216e9c"}}>os</span></li>
                </ul>
                <p>Feminine Plural Nouns (as):</p>
                <ul>
                    <li>The loaves (of bread) - Las barr<span style={{color: "#216e9c"}}>as</span> (de pan)</li>
                    <li>The spoons - Las cuchar<span style={{color: "#216e9c"}}>as</span></li>
                    <li>The stars - Las estrell<span style={{color: "#216e9c"}}>as</span></li>
                </ul>

                <p>There are other very common noun endings, they are 'or', 'dad', 'ión'. when these are plural they add 'es' to the ending.</p>
                <p>Nouns ending in 'ión': (When it's plural it loses it's accent</p>
                <ul>
                    <li>The song - La canc<span style={{color: "#216e9c"}}>ión</span></li>
                    <li>The station - la estac<span style={{color: "#216e9c"}}>ión</span></li>
                    <li>The songs - las canc<span style={{color: "#216e9c"}}>iones</span></li>
                    <li>The stations - Las estac<span style={{color: "#216e9c"}}>iones</span></li>
                </ul>
                <p>Nouns ending in 'dad':</p>
                <ul>
                    <li>The society - La socie<span style={{color: "#216e9c"}}>dad</span></li>
                    <li>The quality - La cali<span style={{color: "#216e9c"}}>dad</span></li>
                    <li>The city - La ciu<span style={{color: "#216e9c"}}>dad</span></li>
                    <li>The cities - Las ciu<span style={{color: "#216e9c"}}>dades</span></li>
                </ul>
                <p>Nouns ending in 'or':</p>
                <ul>
                    <li>The colour - El col<span style={{color: "#216e9c"}}>or</span></li>
                    <li>The pain - El dol<span style={{color: "#216e9c"}}>or</span></li>
                    <li>The colours - Los col<span style={{color: "#216e9c"}}>ores</span></li>
                    <li>The pains - Los dol<span style={{color: "#216e9c"}}>ores</span></li>
                </ul>
            </div>
        );
    }
}

export default PronounsVerbsAndNouns;