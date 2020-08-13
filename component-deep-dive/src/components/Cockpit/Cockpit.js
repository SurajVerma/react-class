import React from 'react';
import classes from './Cockpit.module.scss';


const Cockpit = (props) => {
    const assignedClasses = [];
    const btnClass = [classes.button]
    if(props.showPersons){
        btnClass.push(classes.red);
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return(
        <div>
            <h1>Hi! I am React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass.join(' ')} change={props.showPersons} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;