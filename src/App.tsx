import React, { Component } from "react";
import Header from "./components/single_page_elements/Header";
import Home from "./components/single_page_elements/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import NotesRouter from "./components/routers/Notes";
import ProjectsRouter from "./components/routers/Projects";
import PageNotFound from "./components/single_page_elements/PageNotFound";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path ="/" exact component={Home}/>
                    <Route path ="/notes" exact component={NotesRouter}/>
                    <Route path ="/projects"  component={ProjectsRouter}/>
                    <Route path ="*" component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;