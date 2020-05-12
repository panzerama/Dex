import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg'; 

export default class Navbar extends Component {
    render (){
                    return (
            <nav class="navbar">
            <a class="navbar-brand" href="#"><Logo /></a>

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="navbar-form">
                    <input class="navbar-text" placeholder="Search" />
                    <button class="navbar-submit" >Search</button>
                </form>
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
