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
class NotesRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path ="/notes" exact component={NotesHome}/>

                    <Route path ="/notes/arabic/arabic-contents" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/alphabet" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/greeting-and-intro" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/jobs" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/describing-things" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/locating-things" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/places" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/countries-and-nationality" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/plural-and-dual" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/colors" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/eating-and-drinking" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/past-verbs-and-yesterday" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/daily-routines" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/comparing-things" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/education-and-business" exact component={arabic_contents}/>
                    <Route path ="/notes/arabic/the-future" exact component={arabic_contents}/>



                    <Route path={"*"} component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default NotesRouter;