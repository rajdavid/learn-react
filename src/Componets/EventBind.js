import React, { Component } from 'react'

class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'hello'
         }
         //this.clickHandler=this.clickHandler.bind(this)
     }
    // clickHandler() {
    //     this.setState({
    //         message:'Good bye'
    //     })
    //      console.log(this)
    //  }

     // apporach number 4
    
    clickHandler = () => {
        this.setState({
            message:'Godd gye'
        })
    }


    render() {
        return (
            <div>
                {this.state.message}

                <br />
                {/* one way of binding another way is to use arrow function
                <button onClick={this.clickHandler.bind(this)}>Button</button>
                    2
                <button onClick={() =>this.clickHandler()}>Button</button>
                 */}
                
                <button onClick={this.clickHandler}>Button</button>
            </div>
        )
    }
}

export default EventBind
