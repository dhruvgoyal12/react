import React, { Component } from 'react'

handleChange = (e) =>{
    this.setState({
        searchText: e.ta
    })
}

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange = {this.handleChange}/>
                    <button id="search-btn">Search</button>
                </div>
            </div>
        )
    }
}
