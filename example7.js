import React, { Component } from 'react'

class Example7 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            favoritecolor:"red"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"})
        },1000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML=
        "Before the update, the favorite was " + prevState.favoritecolor
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML=
        "The updated favorite is"+ this.state.favoritecolor
    }
    
    render() {
        return (
            <div>
                <h1>My favoritecolor is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}

export default Example7
