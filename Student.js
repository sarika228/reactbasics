import React from "react"

function Student(props){
    return(
        <div>
            <h2>My name is {props.student.name}.I am {props.student.age} from {props.student.country}</h2>
        </div>
    )

}
export default Student