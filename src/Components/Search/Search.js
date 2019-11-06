import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input onChange={this.props.filterProducts} placeholder="🔍 Search for an item" className="search-box"/>
            </div>
        );
    }
}

export default Search;