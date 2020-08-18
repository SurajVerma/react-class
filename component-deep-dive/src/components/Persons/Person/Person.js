import React from 'react';
import classes from './Person.module.scss';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import propTypes from 'prop-types';

class Person extends React.Component{
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js], rendering...')
        
        return (
            // <div className={classes.person}>
                <Aux>
                {this.props.isAuth ? 'User Authenticated' : 'Please login'}
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" 
                onChange={this.props.change} 
                value={this.props.name} 
                //ref={(inputEl) => this.inputElement = inputEl}
                ref={this.inputElementRef}
                />
                </Aux>
            // </div>
        )
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    change: propTypes.func
}
export default withClass(Person, classes.person);