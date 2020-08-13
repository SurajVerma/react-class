import React from 'react';
import classes from './App.module.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: 'Anvika', age: 0.8 },
      { id: 2, name: 'Advika', age: 0.8 },
      { id: 3, name: 'Suraj', age: 31 },
    ],

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
      clicked={this.deletePersonHandler} 
      changed={this.nameChangeHandler} 
      persons={this.state.persons}/>;
    }
    return (

      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={() => this.togglePersonHandler()}/>
        {persons}
      </div>

    )
  }
}

export default App;
