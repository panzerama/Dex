import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";

import dex_Icon from "./dex_Icon.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={dex_Icon} width="100" height="300" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Dex The Study App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Flashcard Sets</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Flashcard Set</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={FlashcardSetList} />
          <Route path="/edit/:id" component={EditFlashcardSet} />
          <Route path="/create" component={CreateFlashcardSet} />
        </div>
      </Router>
    );
  }
}

export default App;