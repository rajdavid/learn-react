import React from 'react'

function Column() {
     const items=[]
    return (
        //<> </>can also be used for fragments
        // but cannot pass key
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>eyeyy</h1>
                        <p>edee</p>
                </React.Fragment>    
                
                ))
            }
            <td>David</td>
            <td>Raj</td>
        </React.Fragment>
    )
}
export default Column
