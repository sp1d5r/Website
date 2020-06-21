import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class greeting_and_intro extends Component {
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
                        <li className="breadcrumb-item"><a href="#/notes/arabic/arabic-contents">Arabic</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Greeting and Intro</li>
                    </ol>
                </nav>
                <h1>Arabic</h1>
                <h2>Greatings and Introduction</h2>
                <h3>Contents</h3>

                <ul>
                    <li>Greetings</li>
                    <li>Introduction</li>
                    <li>Conclusion</li>
                </ul>

                <h3>Greetings</h3>
                <p>This section will introduce you into how to say hellos and goodbyes in arabic. You might notice that
                    in arabic the the replies to the greetings are often different what you say originally. If that
                    didn’t make sence it might become more clear below:</p>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>أهلا</td>
                        <td>Ahlan</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>مرحبا</td>
                        <td>Merhaban</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>أهلا و,سهلا</td>
                        <td>Ahlan wa sahlan</td>
                        <td>Hello and Welcome</td>
                    </tr>
                    <tr>
                        <td>أهلا بيك</td>
                        <td>Ahlan bik/biki</td>
                        <td>Hello to you (Male/Female)</td>
                    </tr>
                    <tr>
                        <td>صباح الخير</td>
                        <td>sabah al-khayr</td>
                        <td>Good Morning</td>
                    </tr>
                    <tr>
                        <td>صباح النور</td>
                        <td>sabah al-nuur</td>
                        <td>Good Morning (Reply)</td>
                    </tr>
                    <tr>
                        <td>مسا الخير</td>
                        <td>masa al-khayr</td>
                        <td>Good Evening</td>
                    </tr>
                    <tr>
                        <td>مسا ألنور</td>
                        <td>masa al-nuur</td>
                        <td>Good Evening (Reply)</td>
                    </tr>
                    <tr>
                        <td>مع السلامة</td>
                        <td>ma3a salama</td>
                        <td>Goodbye</td>
                    </tr>
                    </tbody>
                </table>

                <p>As you can see from the table above the replies are different to the initial sentance i.e. صباح الخير (sabah al-khayr) is different to صباح النور (sabah al-nuur ).</p>
                <p>You might also notice the lack of “vowels”, in arabic every word has a particular combination of vowels so when writing we ignore them as people can get the meaning from the context.</p>

                <h3>Introduction</h3>

                <p>The simplest way to introduce yourself is to use ana…  (I’m …) or ana ismi (My name is…)<br/>
                    below is a few phrases which you can use. I will adjust it for my name (Elijah Ahmad - I will use Ahmad) but feel free to take these phrases and replace them with your name.</p>

                <table className="table table-striped table-bordered" >
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>أنا أحمد</td>
                        <td>ana Ahmad</td>
                        <td>I’m Ahmad</td>
                    </tr>
                    <tr>
                        <td>أنا إسمي أحمد</td>
                        <td>ana ismi Ahmad</td>
                        <td>My name is Ahmad</td>
                    </tr>
                    <tr>
                        <td>صباح الخير. أنا إسمي أحمد</td>
                        <td>saba al-khayr. ana Ahmad.</td>
                        <td>Good Morning. I’m Ahmad.</td>
                    </tr>
                    </tbody>
                </table>
                <p>In arabic, the formal
                    identification of a person may include their fathers first name. Since my Dad’s first name is Ishfaq
                    i would write:</p>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>أنا إسمي إلياس إشفاق أحمد</td>
                        <td>ana ismi Elias Ishfaq Ahmad</td>
                        <td>My name is Elias Ishfaq Ahmad</td>
                    </tr>
                    </tbody>
                </table>

                <p>To add some more phrases we could say the following:</p>

                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>تشرفنا</td>
                        <td>tasharrafna</td>
                        <td>pleased to meet you</td>
                    </tr>
                    <tr>
                        <td>كيف الحال</td>
                        <td>kayf al-hal</td>
                        <td>How are you?</td>
                    </tr>
                    <tr>
                        <td>الحمدلله</td>
                        <td>al-humdu lilah</td>
                        <td>fine, thanks</td>
                    </tr>
                    </tbody>
                </table>

                <p>To make our conversations more flowing we might want to say “and you” for example</p>

                <pre><code>Person 1: Good morning.
                    Person 2: Good morning, how are you?
                    Person 3: Fine thanks, and you?
                </code></pre>

                <p>The way to say ‘and you’ is wa anti/anta:</p>

                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>و أنت</td>
                        <td>wa anta</td>
                        <td>and you (male)</td>
                    </tr>
                    <tr>
                        <td>و أنت</td>
                        <td>wa anti</td>
                        <td>and you (female)</td>
                    </tr>
                    </tbody>
                </table>

                <p>So, to add a few more phrases to our collection we could say the folllowing:</p>

                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Arabic Phrase</th>
                        <th>Pronunciation</th>
                        <th>English Translation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>أهلا أنا أحمد و أنت</td>
                        <td>ahlan, ana Ahmad w-anti?</td>
                        <td>Hello, I’m Ahmad and you? (female)</td>
                    </tr>
                    <tr>
                        <td>أهلا أنا أحمد و أنت</td>
                        <td>ahlan, ana Ahmad w-anta?</td>
                        <td>Hello, I’m Ahmad and you? (male)</td>
                    </tr>
                    <tr>
                        <td>(name) تشرفنا يا</td>
                        <td>tasharrafna ya (name)</td>
                        <td>pleased to meet you, (name)</td>
                    </tr>
                    <tr>
                        <td>صباح الخير كيف الحال</td>
                        <td>saba al-khayr, kayf al-hal?</td>
                        <td>Good morning, How are you?</td>
                    </tr>
                    <tr>
                        <td>صباحح ألنور كيف الحال</td>
                        <td>saba an-nur, kayf al-hal</td>
                        <td>Good morning (reply), How are you?</td>
                    </tr>
                    <tr>
                        <td>مساء الخير كيف الحال</td>
                        <td>masa al-khayr, kayf al-hal?</td>
                        <td>Good evening, How are you?</td>
                    </tr>
                    <tr>
                        <td>مساء ألنور كيف الحال</td>
                        <td>masa an-nur, kayf al-hal?</td>
                        <td>Good evening (reply), How are you?</td>
                    </tr>
                    <tr>
                        <td>الحمدلله مع سلامة</td>
                        <td>al-humdu lillah, ma3a salama,</td>
                        <td>fine thanks, goodbye</td>
                    </tr>
                    </tbody>
                </table>

                <p>That concludes this section.</p>
                <h3>Conclusion</h3>
                <p>We went over some basic greetings and introduction phrases in arabic.</p>
            </div>
        );
    }
}

export default greeting_and_intro;