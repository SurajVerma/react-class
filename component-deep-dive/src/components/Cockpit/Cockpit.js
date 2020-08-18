import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.scss';


const Cockpit = (props) => {
const toggleCockpitBtn = useRef();

    useEffect(
        ()=>{
            console.log('[Cockpit.js] useEffect')
            // setTimeout(
            //     () => alert('saved'), 1000
            // );
            toggleCockpitBtn.current.click();
            return () => {
                console.log('[Cockpit.js] Cleanup in useeffect');
            };
        }, []); //empty to run on first load or dependencies to watch

    const assignedClasses = [];
    const btnClass = [classes.button]
    if(props.showPersons){
        btnClass.push(classes.red);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button ref={toggleCockpitBtn} className={btnClass.join(' ')} onClick={props.clicked}>Toggle Persons</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={props.login}>Login</button>
        </div>
    );
}

export default React.memo(Cockpit);