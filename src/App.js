
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state ={
    count :0,
  }

  incrementar = () =>{
  this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div className ="App">
        <p>{this.state.count}</p>
        <button onClick={this.incrementar}>Incrementa</button>
      </div>
    );
  }
}

export default App;