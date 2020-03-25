import React, { Component } from "react";
import NotesHome from "../notes/NotesHome";
import ProjectsHome from "../projects/ProjectsHome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PageNotFound from "../single_page_elements/PageNotFound";
class ProjectsRouter extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/projects" exact component={ProjectsHome}/>
                    <Route path={"*"} component={PageNotFound}/>
                </Switch>
        );
    }
}

export default ProjectsRouter;