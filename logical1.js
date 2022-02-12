import React,{useState} from "react"

function Logical1(){
    const [count, setCount]=useState(0)

    return(
        <div>
            <p>Button was clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}> Click Here</button>
        </div>
    )

}
export default Logical1