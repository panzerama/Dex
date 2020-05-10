import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SignIn from "./components/signup.component";
import SignUp from "./components/signup.component";

import dex_Icon from "./dexIcon.png";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <br/>
                <Route path="" exact component={LandingPage} />
                <Route path="/list" exact component={FlashcardSetList} />
                <Route path="/edit/:id" component={EditFlashcardSet} />
                <Route path="/create" component={CreateFlashcardSet} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
      </Router>
    );
  }
}

export default App;