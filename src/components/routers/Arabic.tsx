import React, { Component } from "react";
import PageNotFound from "../single_page_elements/PageNotFound";

// Arabic imports
import arabic_contents from "../notes/arabic/arabic_contents";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class ArabicRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/arabic" exact component={arabic_contents}/>
                <Route path ="/arabic/arabic-contents" exact component={arabic_contents}/>
                <Route path ="/alphabet" exact component={arabic_contents}/>
                <Route path ="/greeting-and-intro" exact component={arabic_contents}/>
                <Route path ="/jobs" exact component={arabic_contents}/>
                <Route path ="/describing-things" exact component={arabic_contents}/>
                <Route path ="/locating-things" exact component={arabic_contents}/>
                <Route path ="/places" exact component={arabic_contents}/>
                <Route path ="/countries-and-nationality" exact component={arabic_contents}/>
                <Route path ="/plural-and-dual" exact component={arabic_contents}/>
                <Route path ="/colors" exact component={arabic_contents}/>
                <Route path ="/eating-and-drinking" exact component={arabic_contents}/>
                <Route path ="/past-verbs-and-yesterday" exact component={arabic_contents}/>
                <Route path ="/daily-routines" exact component={arabic_contents}/>
                <Route path ="/comparing-things" exact component={arabic_contents}/>
                <Route path ="/education-and-business" exact component={arabic_contents}/>
                <Route path ="/the-future" exact component={arabic_contents}/>

                <Route path={"*"} component={PageNotFound}/>
            </Switch>
        );
    }
}

export default ArabicRouter;