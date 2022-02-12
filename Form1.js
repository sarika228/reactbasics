import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
        }
    }
    onChangeHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    render() {
        return (
            <div>
                <label>Username:</label>
                <input onChange={this.onChangeHandler}
                value={this.state.username}
                type="text">
                </input>
            </div>
        )
    }
}

export default Form1
