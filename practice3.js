import React, { Component } from 'react'

class Practice3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    

    render() {
        return this.state.isLoggedIn?
        <div>welcome kindson</div>  : 
       <div>Welcome visitor</div>
    }
    
}

export default Practice3
