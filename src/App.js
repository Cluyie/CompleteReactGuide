import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'dsa2', name: 'Max', age: 28},
      {id: 'asd4', name: 'Manu', age: 29},
      {id: '5123fd',name: 'Steffen', age: 28}
    ],
    otherState: 'Some other value',
    showPersons: false
  }
 
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
      
    };
    //const person = Object.assign({}, this.state.persons[personIndex]); gør det samme som ovenover hvor vi bruger spread operator til at kopier. 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // den her gør egentligt det samme som den overover. the ... er en spread operator og kommer fra ES6. OBS. Arrayet kopiers og der bliver ikke bare sat en pointer. 
    persons.splice(personIndex, 1);
    this.setState({persons :persons});
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow}); //her bliver det modsatte sat. Så vi siger showPersons er lige med ikke doesshow, eller det modsatte af hvad doesShow er lige nu. 
  }
  
  render() {
    const style = {
      backgroundColor:  'white',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
              click= {() => this.deletePersonHandler(index)} //this.deletePersonHandler er en fuction. Når det står på en linje vil alt efter => blive returnet som om der stod => return somecode.
              name ={person.name} 
              age = {person.age}
              key = {person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
        </div> 
        );
    }
    return (
      <div className="App">
        <h1>Hi, iam react App</h1>
        <p>this is realle working!</p>
        <button style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button> 
        {persons}
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?') ); */
  }
}

export default App;
