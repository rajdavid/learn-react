import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor() {
        super()
        this.state = {
             name:'David'
        }
        console.log('a constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('a get dereived from props')
        return null

    }
    componentDidMount() {
        console.log('a did mount')
    }
    shouldComponentUpdate() {
        console.log('sholud component update a')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('getsnapshot before update  A')
        return null
    }
    componentDidUpdate() {
        console.log('component didupdate a')
    }
    changeState =()=> {
        this.setState({
            name:'geeky man'
        })
    }
    render() {
        console.log('a render')
        return (
            <div>
                Lifecyle A
                <br/>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
} 
export default LifeCycleA
