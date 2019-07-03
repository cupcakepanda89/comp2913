import React, { Component } from 'react';
import logo from './logo.svg';
import cat from './cat.jpg';
import Profile from './Profile2';
import './App.css';

// it can be done class App extends React.Component
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>App2</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                  <br />
                        {2 + 3}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                </a>
                    <Profile name="Katelyn" imageUrl={cat} />
                    <Profile name="Daniel Takeuchi" imageUrl={cat} />
                </header>
            </div>
        );
    }

}

export default App;
