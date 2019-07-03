import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // everytime constructor is used
  // need to call super because it is inherited from Component parent class
  constructor(props) {
    super(props);
    this.state = {
      name: 'Daniel',
      currentDate: new Date()
    };
    console.log('constructor');
  }

  render() {
    return (
      <div className="App">
        <h1>Component State</h1>
        {this.state.name}
        <br/>
        {this.state.currentDate.toString()}
      </div>
    );
  };

}

export default App;
