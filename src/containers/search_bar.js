import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'   //import without keyword "default"

class SearchBar extends Component {
    constructor(props) {
        super(props)
        //initate state
        this.state = {term:''}  //search term =""
        this.onInputChange = this.onInputChange.bind(this)  //to call back "this" as the class
        this.onFormSubmit = this.onFormSubmit.bind(this)
        //the purpose is to bind "this" of class and "this" of method
    }

    //change handler: onChange, onHavor, onClick, and so on
    onInputChange(event) {
        //console.log(event.target.value)
        this.setState({term: event.target.value})

        
    }

    onFormSubmit(event) {
        event.preventDefault()  //prevent user submit form by pressing enter keyword
        this.props.fetchWeather(this.state.term)
        this.setState({term: ""})
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" >
                <input className="form-control" type="text" 
                placeholder="Get a five-day forecast in your favorite cities"
                value={this.state.term}
                onChange = {this.onInputChange}/> 

                <span className = "input-group-btn">
                    <button type = "submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
    //the null is there to make sure mapDispatchToProps is the second parameters