import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
        
        // callback ref

        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef=element
        }
    }
    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // call back ref is directly acceses 
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    onClickHandler =()=> {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <br />
                <input type="text" ref={this.setCbRef}/>
                <br />
                <button onClick={this.onClickHandler} >Click</button>
            </div>
        )
    }
}

export default RefsDemo
