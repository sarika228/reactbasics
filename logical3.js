import React,{useState,useEffect} from "react"

function Logical3(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
        console.log("Updating Document Title")
        document.title=`Clicks ${count}`
    },[])
    return(
        <div>
            <input type="text" onChange={(e)=> setName(e.target.value)}></input>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Here</button>
        </div>
    )

}
export default Logical3