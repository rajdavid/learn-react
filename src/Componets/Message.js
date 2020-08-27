import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            msg:'geek'
        }
    }
    changeMessage() {
        this.setState({
            msg:'what is your goal in life'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Hey user ...{this.state.msg}
                </h1>
                <button onClick={()=>this.changeMessage()}> Click Me</button>
            </div>
        )
    }
}
export default Message
