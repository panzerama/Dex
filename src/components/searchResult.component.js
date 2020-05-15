import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



//create table with the following 
//Title, author, description, category, and edit link
const FlashcardSet = props => (
    <tr>
        <td>{props.flashcardSet.flashcardSet_title}</td>
        <td>{props.flashcardSet.flashcardSet_author}</td>
        <td>{props.flashcardSet.flashcardSet_description}</td>
        <td>{props.flashcardSet.flashcardSet_category}</td>
        <td>
            <Link to={"/edit/"+props.flashcardSet._id}>Edit</Link>
        </td>
    </tr>
)

export default class SearchResultList extends Component {

    constructor(props) {
        super(props);
        this.state = {searchResult: []};
    }

    componentDidMount() {
        axios.get('/flashcardSet')
            .then(response => {
                this.setState({searchResult: response.data });
                
            })
            .catch(function (error){
                console.log(error);
            })
    }


    
    searchResultList() {
        return this.state.searchResult.map(function(currentFlashCardSet, i){
            return<FlashcardSet flashcardSet = {currentFlashCardSet} key = {"Math"}/>;
        })
    }
    
    /*
    flashcardSetList() {
        return this.state.flashcardSet.map(function(currentFlashcardSet, i){
            return <FlashcardSet flashcardSet={currentFlashcardSet} key={i} />;
        })
    }
    */

    render() {
        return (
            <div>
                
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.searchResultList() }
                    </tbody>
                </table>
            </div>
        )
    }
}