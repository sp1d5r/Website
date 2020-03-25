import React, { Component } from "react";
import NotesHome from "../notes/NotesHome";
import PageNotFound from "../single_page_elements/PageNotFound";

// Arabic imports
import arabic_contents from "../notes/arabic/arabic_contents";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ArabicRouter from "./Arabic";
class NotesRouter extends Component {
    render() {
        return (
                <Switch>
                    <Route path ="/notes" exact component={NotesHome}/>

                    <Route path ="/arabic" exact component={ArabicRouter}/>

                    <Route path={"*"} component={PageNotFound}/>
                </Switch>
        );
    }
}

export default NotesRouter;