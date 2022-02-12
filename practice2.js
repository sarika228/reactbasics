import React, { Component } from 'react'

class Practice2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn){
            message=<div>Welcome Kindson</div>
        }
        else{
            message=<div>Welcome visitor</div>
        }
        return <div>{message}</div>
    }
}

export default Practice2
