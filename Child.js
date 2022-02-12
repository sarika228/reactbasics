
import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
        // this.onChange=this.onChange.bind(this)
    }
    onChange=(event)=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onChange} >Click me</button>
            </div>
        )
    }
}

export default Child

