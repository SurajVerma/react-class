import React from 'react';
import classes from './App.module.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context'

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 1, name: 'Anvika', age: 0.8 },
      { id: 2, name: 'Advika', age: 0.8 },
      { id: 3, name: 'Suraj', age: 31 },
    ],
    showCockpit: true,
    showPersons: false,
    authenticated: false

  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js componentDidMount]');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

  loginHandler = () => {
    this.setState({ authenticated: true })
  };

  render() {
    console.log('[App.js], render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          persons={this.state.persons}
          //isAuthenticated={this.state.authenticated} 
          />
      );      
    }
    return (      
      // <div className={classes.App}>
        
      // </div>
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })} >Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={() => this.togglePersonHandler()}/>
            ) : null}
            {persons}
        </AuthContext.Provider>
      </Aux>

    )
  }
}

export default withClass(App, classes.App);
