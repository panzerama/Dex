import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SearchPage from "./components/search.component";

import dex_Icon from "./dexIcon.png";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={dex_Icon} width="170" height="105" alt="" />
            </a>
            <Link to="/" className="navbar-brand">Dex The Study App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Browse</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={FlashcardSetList} />
          <Route path="/edit/:id" component={EditFlashcardSet} />
          <Route path="/create" component={CreateFlashcardSet} />
          <Route path ="/search" component={SearchPage}/>
        </div>
        <div className="landing_page_body">
        <div className="landing_page_icon">
          <img src={dex_Icon} width="200" height="125" alt="owl icon"></img>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;