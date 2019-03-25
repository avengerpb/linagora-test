import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Attachment from './Attachment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Attachment/> //Table components to preview files (See Attachment.js)
        </header>
      </div>
    );
  }
}

export default App;
