import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//import logo from './logo.png';
import { ReactComponent as Logo } from './logo.svg';

export default class Navbar extends Component {
    render (){
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" target="_blank">
                        <Link to="/" className="nav-link">
                            <Logo width="170" height="105" alt="" />
                        </Link>
                    </a>
                    
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
                            <li className="navbar-item">
                            <Link to="/create" className="nav-link">Sign Up</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/create" className="nav-link">Sign In</Link>
                            </li>                         
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
