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
    render() {
        console.log('a render')
        return (
            <div>
                lifecyle a
                Render
                <LifeCycleB/>
            </div>
        )
    }
} 
export default LifeCycleA
