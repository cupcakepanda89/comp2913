import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked');
    this.setState({
      counter: this.state.counter + 1
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Component State</h1>
        Counter {this.state.counter}
        <br />
        <button onClick={this.handleClick}>Inrement Counter</button>
      </div>
    );
  };

}

export default App;
