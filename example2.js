import React from "react"
import Student from "./Student"

function Name(){
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
    const studentList=students.map(student=><Student  key={student.id} student={student}></Student>)
}
export default Name