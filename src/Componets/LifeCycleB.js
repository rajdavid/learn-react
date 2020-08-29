import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor() {
        super()
        this.state = {
             name:'David'
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('get dereived from props')
        return null

    }
    componentDidMount() {
        console.log('did mount')
    }
    render() {
        console.log('render')
        return (
            <div>
                lifecyele b
                Render
            </div>
        )
    }
} 
export default LifeCycleB
