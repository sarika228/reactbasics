import React, { Component } from 'react'

class Practical1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:""
        }
    }
    onTextChange = (e) =>{
       this.setState(
           {
             email:e.target.value
           }
       )
    }
    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onChangeHandler=(event)=>{
        event.preventDefault()
        this.props.onChangeHandler({
            email:this.state.email,
            password:this.state.password
        })
    }
    
    render(){
        return (
            <form onSubmit={this.onChangeHandler}>
                <label>Email:</label>
                <input id="email" type="text"  name="email" onChange={this.onTextChange} />
                <br></br>
                <label>Password:</label> 
                <input id="password" type="text"  name="pass" onChange={this.handlePassword}/> 
                <button>submit</button>
            </form>
        )

    }
}
       
    


export default Practical1
