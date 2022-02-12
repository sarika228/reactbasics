import React, { Component } from 'react'
import Child from "./child"

class Example9 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show:true
        }
    }
    delHeader = () =>{
        this.setState({show:false})
    }
    
    render() {
        let myheader
        if(this.state.show){
            myheader= <Child />
        }
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    }
}

export default Example9
