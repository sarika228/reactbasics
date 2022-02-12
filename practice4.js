import React, { Component } from 'react'

class Practice4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:""
        }
    }
    
    render() {
        switch(this.state.isLoggedIn){
            case true:
                return <div>welcome </div>
            case false:
                return <div>Bye</div>
            default:
                return <div>good</div>

        }
        
    }
}

export default Practice4
