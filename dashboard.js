import React from 'react'
import Scoresheet from "./scoresheet"

function Dashboard(props) {
    return (
        <div>
            <Scoresheet scores={props.dataindex}/>
        </div>
    //    <dashboard { "data-index": "4" } </dashboard>
    )
}

export default Dashboard
