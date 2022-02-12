import React, { Component } from 'react'

class Question5 extends Component {
    

    render() {
        return (
            <div>
                <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
            </div>
        )
    }
}

export default Question5
