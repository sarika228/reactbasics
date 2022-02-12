import React from "react"

function List(){
    const names=['Ralujah', 'Jeffrey', 'Jany', 'Adaoma']
    const namesList=names.map((index,name)=><h1 key={index}> {name} {index}</h1>)
    return(
        <div>
            {namesList}
        </div>
    )
}
export default List