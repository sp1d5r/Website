import React, {Component} from "react";

class Cobweb extends React.Component {
    render() {
        return(
            <div className="container">
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/projects">Projects</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cobweb Project</li>
                    </ol>
                </nav>
                <h1 id="cobweb">CobWeb</h1>

                <p>A Programming Language Developed In Java. (Currently Broken, it Needs an IDE)</p>

                <h2 id="whatisit">What is it?</h2>

                <ul>
                    <li>Its a "programming language" concept, built using Java</li>

                    <li>It needs a lot of work and i'm contemplating rebuilding the whole thing in C or C++</li>

                    <li>Props to PogoStickDev29, hes a real MVP</li>
                </ul>

                <h2 id="tableofcontents">Table of Contents</h2>

                <ul>
                    <li><a href="#the-tokenizer">Tokenizer</a></li>

                    <li><a href="#the-parser">Parser</a></li>

                    <li><a href="#the-block">Blocks</a></li>

                    <li><a href="#people">People</a></li>

                    <li><a href="#additional-resources">Additional Resources</a></li>

                    <li><a href="#social-media">Social Media</a></li>
                </ul>

                <h2 id="the-tokenizer">The Tokenizer</h2>

                <p>The tokenizer is a vital part of a programming language, the tokenizer removes all the whitespaces
                    and then seperates the different parts of the code, such as the variables, the values and the
                    classes. To do this we just seperate diffferent values using differnt properties of those items.
                    i.e. separate every statement that starts with print with two spaces in it and separate everything
                    in quotation marks. </p>

                <h2 id="the-parse">The Parse</h2>

                <p>The Parser is the bit of the code that actually looks through the tokenizied code and then gives each
                    a block, it makes sure that all of the code is separated into blocks, (This means the code knows
                    where it is basically). </p>

                <h2 id="the-block">The Block</h2>

                <p>This separates the code into blocks, the blocks allow the program to know where it is relative to the
                    whole code, it results in the program not jumping all over the place. It gives the code a set order
                    that it has to follow, for example the program has to complete the constaints to escape while loops,
                    and it doesn't enter if statements if the parameters aren't met etc.</p>

                <h1 id="additional-resources">Additional Resources</h1>

                <ul>
                    <li><a href="https://jack-vanlightly.com/blog/2016/2/3/creating-a-simple-tokenizer-lexer-in-c">Creating
                        a simple Tokenizer</a></li>

                    <li><a href="https://norasandler.com/2017/11/29/Write-a-Compiler.html">Building a compiler</a></li>
                </ul>

                <h1 id="social-media">Social Media</h1>

                <ul>
                    <li><a href="https://www.linkedin.com/in/elijah-ahmad-658a2b199/">Linkden - Elijah Ahmad</a></li>

                    <li><a href="https://www.facebook.com/elijah.ahmad.71">FaceBook - Elijah Ahmad</a></li>

                    <li><a href="https://www.instagram.com/ElijahAhmad__">Instagram - @ElijahAhmad__</a></li>

                    <li><a href="https://www.snapchat.com/add/elijah.ahmad">Snapchat - @Elijah.Ahmad</a></li>
                </ul>


            </div>

        );
    }


}

export default Cobweb;