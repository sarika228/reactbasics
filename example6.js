import React, { Component } from 'react'

class Example6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            favoritecolor:"red"
        }
        this.changeColor=this.changeColor.bind(this)
    }
    changeColor(){
        this.setState({favoritecolor:"blue"})
    }
    
    render() {
        return (
            <div>
                <h1>My favoritecolor is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}> Change color</button>
            </div>
        )
    }
}

export default Example6
