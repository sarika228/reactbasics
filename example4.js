import React, { Component } from 'react'

class Example4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            favoritecolor:"red"
        }
    }
    static getDerivedStateFromProps(props,state){
        return {favoritecolor:props.favcol}
    }
    changeColor =() =>{
        this.setState({favoritecolor:"blue"})
    }
    
    render() {
        return (
            <div>
                <button  type="button" onClick={this.changeColor}>Change color</button>
               <h1>My favorite color is {this.state.favoritecolor}</h1> 
               {/* <button  type="button" onClick={this.changeColor}>Change color</button> */}
            </div>
        )
    }
}

export default Example4
