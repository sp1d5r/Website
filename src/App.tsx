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

            <Router basename={'/public_html'}>
                <Header/>
                <Switch>
                    <Route path ="${process.env.PUBLIC_URL}/" exact component={Home}/>
                    <Route path ="${process.env.PUBLIC_URL}/notes"  component={NotesRouter}/>
                    <Route path ="${process.env.PUBLIC_URL}/projects"  component={ProjectsRouter}/>
                    <Route path ="${process.env.PUBLIC_URL}/*" component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;