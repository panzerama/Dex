import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg';

export default class Navbar extends Component {
    render (){
        return (
                <nav className="navbar">
                        <div className="navbar-logo"> 
                                <Logo />
                        </div>
                    <div className="navbar-list">  
                        <Link to="/" className="nav-link">
                            <button type="button" className="navbar-button">  
                                Home
                            </button>
                        </Link> 
                        <Link to="/search" className="nav-link" >
                            <button type="button" className="navbar-button">  
                                Search
                            </button>
                        </Link>
                        <Link to="/" className="nav-link">
                            <button type="button" className="navbar-button">
                                Browse
                            </button>
                        </Link>
                        <Link to="/create" className="nav-link">
                            <button type="button" className="navbar-button">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="navbar-signin">  
                        <Link to="/create" className="nav-link">
                            <button type="button" className="navbar-button">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/create" className="nav-link">
                            <button type="button" className="navbar-button">
                                Sign In
                            </button>   
                        </Link> 
                    </div>
                </nav>
        )
    }
}
