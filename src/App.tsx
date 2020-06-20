import React, { Component } from "react";
import Header from "./components/single_page_elements/Header";
import Home from "./components/single_page_elements/Home";
import 'materialize-css';
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
import arabic_contents from "./components/notes/arabic/arabic_contents";
import Cobweb from "./components/projects/Cobweb";
import MechanicsApp from "./components/projects/MechanicsApp";
import NotesHome from "./components/notes/NotesHome";
import ProjectsHome from "./components/projects/ProjectsHome";
import Contact from "./components/contact/Contact";
import greeting_and_intro from "./components/notes/arabic/greeting_and_intro";
import Footer from "./components/single_page_elements/Footer";
import GeneralBlockchain from "./components/projects/GeneralBlockchain";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path ="/" exact component={Home}/>

                    <Route path ="/notes" exact component={NotesHome}/>

                    <Route path="/notes/arabic/arabic-contents" exact component={arabic_contents}/>
                    <Route path ="/arabic/arabic-contents" exact component={arabic_contents}/>
                    <Route path ="/alphabet" exact component={arabic_contents}/>
                    <Route path ="/arabic/greeting-and-intro" exact component={greeting_and_intro}/>
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

                    <Route path ="/projects" exact component={ProjectsHome}/>
s
                    <Route path ="/projects/cobweb" exact component={Cobweb}/>
                    <Route path ="/projects/mechanics-app" exact component={MechanicsApp}/>
                    <Route path ="/projects/general-blockchain" exact component={GeneralBlockchain}/>


                    <Route path ="/contact" exact component={Contact}/>
                    <Route path ="*" component={PageNotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;