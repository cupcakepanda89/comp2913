import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';

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

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    setInterval(() => {
      // console.log('setInterval')
      // this.state.currentDate = new Date(); // this is WRONG

      this.setState({
        currentDate: new Date()
      });
    }, 1000);
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Component State</h1>
        {this.state.name}
        <br />
        {this.state.currentDate.toString()}
        <br />
        <TestComponent currentDate={this.state.currentDate.toString()} />
      </div>
    );
  };

}

export default App;
