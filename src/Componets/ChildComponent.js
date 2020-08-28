import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/*  using inheritence 
            <button onClick={props.greetHandler}>Greet Parent</button>
            passing the value from child to parent
            */}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent