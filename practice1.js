import React, { Component } from 'react'

class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        if (this.state.isLoggedIn){
            return(
                <div>Welcome, Kindson!</div>
            )
        }
        else{
            return (
                <div>Welcome, visitor!</div>
            )
        }
    }
}

export default WelcomeUser


