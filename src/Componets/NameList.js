import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
        id:1,
        name: 'bruce',
        skill :'react'
        },
        {
            id :2,
            name: 'clark ',
            skill:'vue'
        },
        {
            id :3,
            name: 'diana ',
            skill:'angular'        }]
    
    const persons = person.map(person => <Person person={person}/>)
    return (
        <div>{persons}</div>
    )
}

export default NameList
