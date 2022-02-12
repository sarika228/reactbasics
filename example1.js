import React from "react"

function Names(){
    const students=[
        {
            id: 1,
            name: 'Jadon',
            age: 16,
            country: 'Canada'
        },
        {
            id: 1,
            name: 'Macmills',
            age: 13,
            country: 'Nigeria'
        },
        {
            id: 1,
            name: 'Kumar',
            age: 24,
            country: 'India'
        }
    ]
    const studentList=students.map(student=>
    <h2>My name is {student.name}.I am {student.age} from {student.country}</h2>)
    return(
        <div>{studentList}</div>
    )

}
export default Names