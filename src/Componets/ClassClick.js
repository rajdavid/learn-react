import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler() {
         console.log('yeah clicked') 
     }
    render() {
        return (
            <div>
                

                <button onClick={this.clickHandler}>Click Me</button>
             </div>   
        )
    }
}
