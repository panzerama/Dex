import React, {Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

//perform search with mongoDB by taking the search value submitted by the user
export default class SearchPage extends Component{

    constructor(props){
        super(props);
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        search_value: ''
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
    console.log(`Search Value:') ${this.state.search_value}`);
    var search_value = this.state.search_value;

    axios.post('http://localhost:4000/search', search_value)
        .then(res => console.log(res.data));



}

render(){
    return(
        <div style = {{marginTop: 10}}>
            <h3>Search</h3>
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                    <label> Search: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.search_value}
                        onChange = {this.onChangeSearchValue}
                        />
                </div>
                <div className = "form-group">
                    <input type = "submit" value = "Search" className = "btn-btn-primary" />

                </div>
            </form>
        </div>
    )
}


}

