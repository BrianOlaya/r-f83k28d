import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();

    this.state ={
      value:0
    };
  }

  Incrementa = ()=>{
    this.setState({value:this.state.value+1});

  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button onClick={this.Incrementa} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
