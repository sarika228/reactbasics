import React, { useState } from "react"

function Child(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        if(name==="name"){
            setEmail(value)
        }
        else{
            setPassword(value)
        }
        // setEmail(e.target.value)
        // setPassword(e.target.value)
    }
    // const handlePassword=(e)=>{
    //     setPassword(e.target.value)

    // }
    const handlesubmit=(e)=>{
        e.preventDefault()
        props.childvalue({
            email:email,
            Password:password
        })
    }

    return (

        <form onSubmit={handlesubmit} >
            <label>Email:</label>
            <input type="text" placeholder="add names" name="name" onChange={handleChange}/>
            <br></br>
            <label>Password:</label>
            <input type="text" placeholder="add password"  name="pass" onChange={handleChange}></input>
            <button>Submit</button> 

            {/* <button type="text" onClick={()=>props.changeWord("Manjula")}>Submit</button> */}
        </form>

    )

}
export default Child