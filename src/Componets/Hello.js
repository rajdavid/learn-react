import React from 'react'

// export  function Hello() {
//     return (
//         <div className='dummyClass'>
//         <h3>Hey user</h3>
//         </div>
//     )
// }


// using jsx
export const Hello = () => {
    return React.createElement(
        'div',
        {
            id: 'hello',
            className:'dummyClass'},
        null,
        React.createElement('h1', null, 'hey user'))
}