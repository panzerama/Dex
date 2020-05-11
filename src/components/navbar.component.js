import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg';

export default class Navbar extends Component {
    render (){
        return (
                <nav className="navbar-container">
                        <div className="navbar-logo-container"> 
                                <Logo />
                        </div>
                    <div className="navbar-list-container">  
                        <Link to="/" className="nav-link">
                            <button type="button" className="navbar-button active">  
                                Home
                            </button>
                        </Link> 

                        <Link to="/browse" className="nav-link">
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
                    <div className="navbar-search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search"></input>
                            <button type="button" className="navbar-button">  
                                Search
                            </button>
                        </form>       
                    </div>
                    <div className="navbar-user-container">
                        <Link to="/signup" className="nav-link">
                            <button type="button" className="navbar-button">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/signin" className="nav-link">
                            <button type="button" className="navbar-button">
                                Sign In
                            </button>   
                        </Link> 
                        
                    </div>
                </nav>
        )
    }
}
