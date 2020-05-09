import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class LandingPage extends Component {
/*
    render() {
        return <div />;
    }
}
*/
    render() {
        return (
            <div>
                <h3>FlashcardSet List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Search</th>
                            <th>Browse</th>
                            <th>Create</th>
                            <th>Sign Up</th>
                            <th>Sign In</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
    
}
