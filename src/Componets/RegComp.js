import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('regular comoponent')
        return (
            <div>
                Regular component  {this.props.name}
            </div>
        )
    }
}

export default RegComp
