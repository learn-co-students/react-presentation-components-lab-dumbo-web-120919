// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handleToggle = () => {
        const toggleMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({ mood: toggleMood })
    }

    render() {
        return (
            <div onClick={this.handleToggle}>
                {this.state.mood}
            </div>
        )
    }
}
