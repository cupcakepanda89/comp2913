import React, { Component } from 'react';

class TestComponent extends Component {

    componentDidUpdate(){
        console.log('componentDidUpdate from TestComponent');
    }

    // use this method will stop the component props to update
    /* shouldComponentUpdate(){
        return false;
    }
     */
  render() {
    console.log("render from Test Component");
    return (
      <div className="App">
        <h1>Test Component</h1>
        {this.props.currentDate}
      </div>
    );
  };

}

export default TestComponent;
