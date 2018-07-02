import React, { Component } from 'react';

import Icon from '../Icon';
import Description from '../Description';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Icon />
        
        <h1>Project SIBO</h1>
        <Description/>
        <h2>currenty <b>in development</b></h2>
      </div>
    );
  }
}

export default App;
