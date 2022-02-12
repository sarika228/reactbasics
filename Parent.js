import React,{useState} from "react"
import ChildrenComponent from "./childrencomponent"


function App(){
    const [userInfo,updateUserInfo]=useState({})
    function child(data){
        updateUserInfo(data)
        console.log(userInfo)
    }
    return(
        <div>
            <p>My username is: {userInfo.username}</p>
            <p>My password is: {userInfo.password}</p>
            <ChildrenComponent childvalue={child}/>
        </div>
    )

}
export default App