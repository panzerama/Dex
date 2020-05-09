import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class LandingPage extends Component {
    render (){
        return (
            <Router>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/" target="_blank">
                    <img src={dex_Icon} width="170" height="105" alt="" />
                    </a>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/list" className="nav-link">Browse</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <Route path="" exact component={LandingPage} />
                <Route path="/list" exact component={FlashcardSetList} />
                <Route path="/edit/:id" component={EditFlashcardSet} />
                <Route path="/create" component={CreateFlashcardSet} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                </div>
            </Router>
        )
    }
}
