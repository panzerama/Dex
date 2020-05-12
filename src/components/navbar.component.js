import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg'; 

export default class Navbar extends Component {
    render (){
                    return (
            <nav class="navbar">
                <div class="navbar-brand" href="#"><Logo /></div>

                <ul class="navbar-left">
                    <li class="nav-item">
                        <a class="nav-left" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-left" href="/create">Create</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-left" href="/browse">Browse</a>
                    </li>
                    
                </ul>
                <form class="navbar-form">
                    <input class="navbar-text" placeholder="Search" />
                    <a class="navbar-submit" >Search</a>
                </form>
                <ul class="navbar-right">
                    <li class="nav-item">
                        <a class="nav-right" href="/signup">Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-right" href="/signin">Login</a>
                    </li>
                </ul>

                
            </nav>

            /* Dropdown Code 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            */
        )
    }
}
