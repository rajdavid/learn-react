import React, { Component } from 'react'


// class component
export  class Welcome extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}  aka {this.props.heroName}</h4>
            </div>
        )
    }
}
