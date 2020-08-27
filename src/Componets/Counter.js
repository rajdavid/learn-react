import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        // this.setState({
        //     count : this.state.count+1
        // },()=>{console.log('call back value ', this.state.count)}
        //)
        this.setState(prevState => ({
            count:prevState.count+1
        }))
        console.log(this.state.count)
        
    }
    incrementCountFive = () => {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                Count : {this.state.count}
                <br/>
                <button onClick={this.incrementCountFive}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default Counter
