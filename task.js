import React,{useState} from "react"
import Child from "./child"

function Task(){
    const[info,setInfo]=useState("")
    function child(data){
        setInfo(data)
        console.log(info)

    }

    return(
        <>
        <h3>Email:{info.email}</h3>
        <h3>Password:{info.Password}</h3>
        <Child childvalue={child}/>
        </>
    )
    

}
export default Task