import React, {Component} from "react";

class GeneralBlockchain extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <br/>
                <br/>
                <br/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#/projects">Projects</a></li>
                        <li className="breadcrumb-item active" aria-current="page">General Blockchain</li>
                    </ol>
                </nav>
                <h1 id="GeneralBlockChain">General Blockchain</h1>

                <p>
                    This is a template for a general purpose blockchain I made, It's pretty useless as of now but it's a
                    proof of concept
                </p>

                <h2></h2>

            </div>
            );
    }


}

export default GeneralBlockchain;