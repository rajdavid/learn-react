import React from 'react'

export default function Person({ person}) {
    return (
        <div>
            <h1>
            {person.id}<br />
            {person.name}<br />
            {person.skill}<br/>
         </h1>
        </div>
    )
}
