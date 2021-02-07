import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import Converter from "./components/Converter";
import NotFound from "./components/NotFound";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => (
    <Router>
        <div className="App">
            <header>
                <nav className="AppBar">
                    <img
                        className="AppBar-logo"
                        src={logo}
                        aria-label="people"
                        alt="People"
                    />
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Converter}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default App;
