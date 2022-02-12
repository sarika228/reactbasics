import React, { Component } from 'react'

class Example5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            favoritecolor:"red"
        }
    }
    shouldComponentUpdate(){
        return true
    }
    changeColor = () =>{
        this.setState({favoritecolor:"blue"})
    }
    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}

export default Example5
