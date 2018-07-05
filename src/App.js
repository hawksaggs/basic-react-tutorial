import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Test00', age: 27},
      {name: "Test01", age: 24},
      {name: "Test02", age: 29},
    ],
    someOtherState: "Some other value"
  }

  switchNameHandler = (clickedName) => {
    console.log('Was clicked!!');
    //DON'T DO THIS: this.state.persons[0].name = 'Ayush123';
    this.setState({persons: [
      {name: clickedName, age: 27},
      {name: "Test01", age: 24},
      {name: "Test02", age: 30},
    ]});
  }

  changeNameHandler = (event) => {
    this.setState({persons: [
      {name: 'Test00', age: 27},
      {name: event.target.value, age: 24},
      {name: "Test02", age: 30},
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App.</h1>
        <button onClick={() => this.switchNameHandler('Ayush Mittal')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Max!!')}
        changed={this.changeNameHandler}>Hobbie: Sleeping</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am React App'));
  }
}

export default App;
