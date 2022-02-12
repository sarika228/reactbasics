import React,{useState,useEffect} from "react"

function Logical2(){
    const [count,setCount]=useState(0)
    useEffect(() => {
        document.title= `Clicks ${count}`

    })
        return(
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>setCount(count+1)}>
                    Click Here
                </button>
            </div>
        )
            
    
}
export default Logical2