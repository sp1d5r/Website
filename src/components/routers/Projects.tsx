import React, { Component } from "react";
import NotesHome from "../notes/NotesHome";
import ProjectsHome from "../projects/ProjectsHome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class ProjectsRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path ="/projects" component={ProjectsHome}/>
                    <Route path ="/Notes/Arabic" component={NotesHome}/>
                </Switch>
            </Router>
        );
    }
}

export default ProjectsRouter;