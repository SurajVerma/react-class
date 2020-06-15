import React from 'react';
import './Person.scss';


const person = (props) => {
return (
    <div className="person">
        <p>I am {props.name} and I am {props.age} years old!</p>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
)
}

export default person;