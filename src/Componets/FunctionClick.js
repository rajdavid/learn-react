import React from 'react'

function FunctionClick() {
   function onClickHandler(){
        console.log('button clicked')
     }
    return (
        <div>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}
export default FunctionClick