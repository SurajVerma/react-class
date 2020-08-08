import React from 'react';
// import Radium from 'radium';
import classes from './Person.module.scss';
// import styled from 'styled-components';

// const StyledDiv = styled.div`width: 60%;margin: 15px auto;border: 1px solid #ccc;box-shadow: 0 0 5px 1px rgba(0,0,0, .5);padding: 10px;
// @media (min-width:500px){
//     width:500px;
// }
// `

const person = (props) => {
    // const style = {
    // '@media (min-width:500px)': {
    //     width: '450px'
    // }
    // }
    return (
        <div className={classes.person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
        // <StyledDiv>
        //     <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.change} value={props.name} />
        // </StyledDiv>
    )
}

export default person;