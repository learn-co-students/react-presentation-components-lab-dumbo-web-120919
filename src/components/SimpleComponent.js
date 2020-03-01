// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            mood: "happy"
        }

    }

    handleClick = () => {
        
        if (this.state.mood === "happy") {
            this.setState({
                mood: "sad"
            })
        } else {
            this.setState({
                mood: "happy"
            })
        }

    }

    render() {
        return(
            <div onClick={this.handleClick}>
                <h3>{this.state.mood}</h3>
            </div>
        )
    }
}

export default SimpleComponent