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

    shouldComponentUpdate() {
        console.log('sholud component update b')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('get snapshot before update  b')
        return null
    }
    componentDidUpdate() {
        console.log('component didupdate b')
    }

    render() {
        console.log('render')
        return (
            <div>
                lifecyele B`
            </div>
        )
    }
} 
export default LifeCycleB
