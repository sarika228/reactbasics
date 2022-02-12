import React, { Component } from 'react'
import Practical1 from "./practical1"

class Practical extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:""
             
        }
        
    }
    greetParent=(child)=>{
        this.setState({
            data:child
        })
    }
    
    render() {
        const {data}=this.state
        return (
            <div>
               <h1>Email is:{data.email}</h1>
               <h1>Password is:{data.password}</h1>
                <Practical1  onChangeHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Practical;
