import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/graph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Graphs</h2>
        </header>
        <Graph />
      </div>
    );
  }
}

export default App;
