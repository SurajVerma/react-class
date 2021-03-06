import React from 'react';
import Person from './Person/Person';


class Persons extends React.Component{
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return true;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }
    render(){   
             
        console.log('[Persons.js], rendering...');
        return(
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        click={() => this.props.clicked(index)}
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        change={(event) => this.props.changed(event, person.id)}
                        //isAuth={this.props.isAuthenticated} 
                        />
                )
            })
        )
    }
}


    export default Persons;