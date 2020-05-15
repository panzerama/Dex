import React, {Component} from 'react';
import axios from 'axios';
import SearchResult from './searchResult.component'

//perform search with mongoDB by taking the search value submitted by the user
export default class SearchPage extends Component{
    
    constructor(props){
        super(props);
        this.state = {flashcardSet: []};
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFlashcardSetCategory = this.onChangeFlashcardSetCategory.bind(this);

    this.state = {
        search_value: ' '
    }
}

onChangeSearchValue(e) {
    this.setState({
        search_value: e.target.value
    });
}



onSubmit(e) {
    e.preventDefault();

    console.log('Search value submitted');
    
    console.log(`Search Value:${this.state.search_value}`);
    var search_value = this.state.search_value;
    console.log('search_value' + search_value)
    
    axios.get('http://localhost:4000/flashcardSet/')
        .then(response => {
            this.setState({ flashcardSet: response.data });
            console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
}

onChangeFlashcardSetCategory(e) {
    this.setState({
        flashcardSet_category: e.target.value
    });
}



render(){
    return(
        <div style = {{marginTop: 10}}>
            <h3>Search</h3>
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">                   
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.search_value}
                        onChange = {this.onChangeSearchValue}
                        />
                </div>
                <div className = "form-group">
                    <input type = "submit" value = "Search" className = "btn-btn-primary" />

                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="categoryOptions" 
                                        id="categoryTitle" 
                                        value="Title" 
                                        checked={this.state.flashcardSet_category==='Title'} 
                                        onChange={this.onChangeFlashcardSetCategory}
                                        />
                                <label className="form-check-label">Title</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryAuthor" 
                                    value="Author"
                                    checked={this.state.flashcardSet_category==='Author'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Author</label>
                        </div>
                        <div>
                            <h3>Search Result:</h3>
                    
                        <SearchResult/>
                        </div>
                        
                        
                    </div>
            </form>
            
        </div>

        
    )
}


}

 