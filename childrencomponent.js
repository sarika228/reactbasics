import React,{useState} from "react"

function ChildrenComponent(props){
    const[username,updateUsername]=useState("")
    const[password,updatePassword]=useState("")

    const onTextChange = (event) =>{
        switch (event.target.id){
            case "username":
                updateUsername(event.target.value)
                break;
            case "password":
                updatePassword(event.target.value)
                break;
        }

    }
    const onLoginClick=(event)=>{
        event.preventDefault()
        console.log(username,password)

        props.childvalue({
            username:username,
            password:password})
    }

    return(
        <form onSubmit={onLoginClick}>
        <label>username</label>
        <input id="username" type="email" value={username} onChange={onTextChange}></input>
        <br></br>
        <label>password</label>
        <input id="password" type="password" value={password} onChange={onTextChange}></input>
        <br></br>
        <button>Login</button>
        </form>
    )

}
export default ChildrenComponent