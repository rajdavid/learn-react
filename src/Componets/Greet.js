import React from 'react'

// old way of writing functional compenents

//  function Greet() {
//     return (
//         <div>
//             <h1>Hey User</h1>
//         </div>
//     )
// }
// export default Greet;


// es6 way of writing functional component
//using arrow function
// const Greet = () => <h1>Click Counter ...</h1>
// export default Greet

// named export

export const Greet = ({name ,heroName  }) => {
    console.log(props)
    return (
        <div>
            <h3>
                {name}  is {heroName}
            </h3>
            <h4>{props.children}</h4>
            </div>
        )
}
