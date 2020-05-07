import React, { Component } from 'react';
import axios from 'axios';

export default class EditFlashcardSet extends Component {

    constructor(props) {
        super(props);

        this.onChangeFlashcardSetTitle = this.onChangeFlashcardSetTitle.bind(this);
        this.onChangeFlashcardSetAuthor = this.onChangeFlashcardSetAuthor.bind(this);
        this.onChangeFlashcardSetDescription = this.onChangeFlashcardSetDescription.bind(this);
        this.onChangeFlashcardSetCategory = this.onChangeFlashcardSetCategory.bind(this);
        this.onChangeFlashcardSetCompleted = this.onChangeFlashcardSetCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            flashcardSet_title: '',
            flashcardSet_author: '',
            flashcardSet_description: '',
            flashcardSet_category: '',
            flashcardSet_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/flashcardSet/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    flashcardSet_title: '',
                    flashcardSet_author: '',
                    flashcardSet_description: '',
                    flashcardSet_category: '',
                    flashcardSet_completed: false
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeFlashcardSetTitle(e) {
        this.setState({
            flashcardSet_title: e.target.value
        });
    }

    onChangeFlashcardSetAuthor(e) {
        this.setState({
            flashcardSet_author: e.target.value
        });
    }

    onChangeFlashcardSetDescription(e) {
        this.setState({
            flashcardSet_description: e.target.value
        });
    }

    onChangeFlashcardSetCategory(e) {
        this.setState({
            flashcardSet_category: e.target.value
        });
    }

    onChangeFlashcardSetCompleted(e) {
        this.setState({
            flashcardSet_completed: !this.state.flashcardSet_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            flashcardSet_title: this.state.flashcardSet_title,
            flashcardSet_author: this.state.flashcardSet_author,
            flashcardSet_description: this.state.flashcardSet_description,
            flashcardSet_category: this.state.flashcardSet_category,
            flashcardSet_completed: this.state.flashcardSet_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/flashcardSet/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update FlashcardSet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.flashcardSet_title}
                                onChange={this.onChangeFlashcardSetTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.flashcardSet_author}
                                onChange={this.onChangeFlashcardSetAuthor}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.flashcardSet_description}
                                onChange={this.onChangeFlashcardSetDescription}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryMath" 
                                    value="Math"
                                    checked={this.state.flashcardSet_category==='Math'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Math</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryScience" 
                                    value="Science" 
                                    checked={this.state.flashcardSet_category==='Science'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Science</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryEnglish" 
                                    value="English" 
                                    checked={this.state.flashcardSet_category==='English'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">English</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeFlashcardSetCompleted}
                                checked={this.state.flashcardSet_completed}
                                value={this.state.flashcardSet_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update FlashcardSet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}