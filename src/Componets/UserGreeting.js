import React, { Component } from 'react'

class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn :true
       }
     }
     
    render() {

        return this.state.isLoggedIn &&<div>Welcome .... </div>




        // render using ternary
        // return (
        //     this.state.isLoggedIn ?
        //     <div>
        //             Welcome User
        //     </div>
        //         :
        //     <div>
        //             Welcome Guest
        //     </div>
        // )

        // using element variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>logging as user</div>
        // }
        // else
        // {
        //     message = <div>logging as guest</div>
            
        // }
        // return (
        //     <div>
        //         {message}
        //         </div>
        // )

        // if else conditional rendering
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome David
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    }
}
export default UserGreeting
