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
            <Router basename={'/notes'}>
                <Switch>
                    <Route path ="${process.env.PUBLIC_URL}/notes" exact component={NotesHome}/>

                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/arabic-contents" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/alphabet" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/greeting-and-intro" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/jobs" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/describing-things" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/locating-things" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/places" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/countries-and-nationality" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/plural-and-dual" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/colors" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/eating-and-drinking" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/past-verbs-and-yesterday" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/daily-routines" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/comparing-things" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/education-and-business" exact component={arabic_contents}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes/arabic/the-future" exact component={arabic_contents}/>



                    <Route path={"*"} component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default NotesRouter;