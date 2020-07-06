import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{
  state = {
    persons: [
      {id: 1, name: 'Anvika', age: 0.6},
      {id: 2, name: 'Advika', age: 0.6}
    ],

  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 0.6},
  //       {name: 'Advika Verma', age: 0.6}
  //     ]
  //   })
  // }
  // nameChangeHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {name: event.target.value, age: 0.6},
  //       {name: 'Advika Verma', age: 0.6}
  //     ],
  //     showPersons: false
  //   })
  // }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person ={...this.state.persons[personIndex]}

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render(){
    const style ={
      backgroundColor: '#ccc',
      textTransform: 'uppercase',
      padding: '7px 10px',
      border: '1px solid #ddd',
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {/* <Person 
          click={this.switchNameHandler.bind(this, 'Annu!')} 
          change={this.nameChangeHandler}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} >I am very naughty, and I love Dada ji ki dukan</Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} >I am Dadi ji ki dulari, and I scream a lot</Person> */}
          {this.state.persons.map((person, index) => {
            return <Person click={()=> this.deletePersonHandler(index)} key={person.id} name={person.name} age={person.age} change={(event) => this.nameChangeHandler(event,person.id)}/>
          })}
        </div>
      )
    }
    return(
      <div className="App">
        <h1>Hi! I am React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.togglePersonHandler()}>Toggle Persons</button>
        {/* {this.state.showPersons ?
        <div>
        <Person 
        click={this.switchNameHandler.bind(this, 'Annu!')} 
        change={this.nameChangeHandler}
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} >I am very naughty, and I love Dada ji ki dukan</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} >I am Dadi ji ki dulari, and I scream a lot</Person>
          </div> : null
          } */}
        {persons}
      </div>
    )
  }
}

export default App;
