import React, { Component } from 'react'


// class component
export  class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        
        //const {state1 , state2} =this.state
        return (
            <div>
                <h4>{name}  aka {heroName}</h4>
            </div>
        )
    }
}
