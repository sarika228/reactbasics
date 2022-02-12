import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:"welcome guest"
        }
    }
    changeMessage(){
        this.setState({
            message:"thanks a lot for subscribing!"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>
                    please subscribe
                </button>
            </div>
        )
    }
                
            
    }


export default Message
