import React, {Component} from "react";

class ComputerSystemProjects extends React.Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Computer System Projects</li>
                    </ol>
                </nav>
                <h1>Computer System Projects</h1>
            </div>
        );
    }


}

export default ComputerSystemProjects;