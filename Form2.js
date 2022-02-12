import React, { Component } from 'react'

class Form2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:""
        }
    }
    onChangeHandler=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <label>Course</label>
                <select value={this.state.course}
                onChange={this.handleCourseChange}>
                    <option value="python">Python</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="react">React</option>
                </select>
            </div>
        )
    }
}

export default Form2
