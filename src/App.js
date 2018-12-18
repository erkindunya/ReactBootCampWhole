import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PhotoList.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }
      componentDidMount() {
        fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

export default App;
