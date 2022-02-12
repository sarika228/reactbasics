import React from 'react'

function Addition(props) {
    return (
        <div className="blue">
            <h1>total counts{props.count}</h1>
        </div>
            // React.createElement("div", { className: "blue" }, `total count${props.count}`)
    )
}

export default Addition
