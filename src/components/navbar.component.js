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
                        <Link to="/">
                            <Logo width="20%" height="%22"/>
                        </Link>     
                    </div>
                    <div className="navbar-list">   
                        <button type="button" className="navbar-button">  
                            <Link to="/search" className="nav-link">Search</Link>
                        </button>
                        <button type="button" className="navbar-button">
                            <Link to="/" className="nav-link">Browse</Link>
                        </button>
                        <button type="button" className="navbar-button">
                            <Link to="/create" className="nav-link">Create</Link>
                        </button>
                    </div>
                    <div className="navbar-signin">  
                        <button type="button" className="navbar-button">
                            <Link to="/create" className="nav-link">Sign Up</Link>
                        </button>
                        <button type="button" className="navbar-button">
                            <Link to="/create" className="nav-link">Sign In</Link>
                        </button>    
                    </div>
                </nav>
        )
    }
}
