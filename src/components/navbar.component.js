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
                            <button type="button" className="button">  
                                Home
                            </button>
                        </Link> 
                        <Link to="/search" className="nav-link" >
                            <button type="button" className="button">  
                                Search
                            </button>
                        </Link>
                        <Link to="/browse" className="nav-link">
                            <button type="button" className="button">
                                Browse
                            </button>
                        </Link>
                        <Link to="/create" className="nav-link">
                            <button type="button" className="button">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="navbar-signin">  
                        <Link to="/signup" className="nav-link">
                            <button type="button" className="button">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/signin" className="nav-link">
                            <button type="button" className="button">
                                Sign In
                            </button>   
                        </Link> 
                    </div>
                </nav>
        )
    }
}
