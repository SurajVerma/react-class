import React from 'react';
import classes from './Person.module.scss';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import propTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends React.Component{
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js], rendering...')
        
        return (
            // <div className={classes.person}>
                <Aux>
                {this.context.authenticated ? 'User Authenticated' : 'Please login'}
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? 'User Authenticated' : 'Please login'}
                </AuthContext.Consumer> */}
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