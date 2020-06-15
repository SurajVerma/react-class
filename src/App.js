import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// const App = props =>{
// const [personsState, setPersonsState] = useState({
//   persons: [
//     {name: 'Anvika', age: 0.6},
//     {name: 'Advika', age: 0.6}
//   ]
// });

// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//       {name: 'Anvika Verma', age: 0.6},
//       {name: 'Advika Verma', age: 0.6}
//     ]
//   })
// }

//   return(
//     <div className="App">
//       <h1>Hi! I am React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >I am very naughty</Person>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//     </div>
//   )
// }

class App extends React.Component{
  state = {
    persons: [
      {name: 'Anvika', age: 0.6},
      {name: 'Advika', age: 0.6}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 0.6},
        {name: 'Advika Verma', age: 0.6}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 0.6},
        {name: 'Advika Verma', age: 0.6}
      ]
    })
  }

  render(){
    const style ={
      backgroundColor: '#ccc',
      textTransform: 'uppercase',
      padding: '7px 10px',
      border: '1px solid #ddd',
    }
    return(
      <div className="App">
        <h1>Hi! I am React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('Annu Verma!!')}>Switch Name</button>
        <Person 
        click={this.switchNameHandler.bind(this, 'Annu!')} 
        change={this.nameChangeHandler}
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} >I am very naughty, and I love Dada ji ki dukan</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} >I am Dadi ji ki dulari, and I scream a lot</Person>
      </div>
    )
  }
}

export default App;
