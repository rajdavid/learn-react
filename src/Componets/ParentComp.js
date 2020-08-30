import React, { PureComponent } from 'react'
import MemoComponent from './MemoComponent'
//import RegComp from './RegComp'
//import PureComp from './PureComp'

class ParentComp extends PureComponent {
     
    constructor(props) {
        super(props)
    
        this.state = {
             name:'david'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'david'
            })
        },2000)
    }
    render() {
        console.log('**********************')
        return (
            <div>
                
                Inherent Component
                <MemoComponent name={this.state.name}/>
                {/*<RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
