import React from 'react'

function MemoComponent({ name}) {
    
    console.log('redndering memo component')
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComponent)