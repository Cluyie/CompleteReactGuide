import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steffen', age: 28}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = 'Steffen Juhl';
    this.setState( {
      persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steffen', age: 38}
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Steffen', age: 38}
      ] 
    })
  }
  
  render() {
    const style = {
      backgroundColor:  'white',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, iam react App</h1>
        <p>this is realle working!</p>
        <button style={style}
        onClick={() => this.switchNameHandler('Hans!!')}>Switch Name</button> {/* () => this.switchNameHandler er en fuction. Når det står på en linje vil alt efter => blive returnet som om der stod => return somecode. Man kan også gøre det normalt ved at tilføje { retrun somecode} */}
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
        <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Hans')}
         changed={this.nameChangedHandler}>My hobbies: Racing</Person>
        <Person 
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}/>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?') ); */
  }
}

export default App;
