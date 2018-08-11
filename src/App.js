import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  render() {
    return (
      // here, onTouchMove={e => e.preventDefault()}
      <div className="App" onTouchMove={e => e.preventDefault()}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ height: "1000px", backgroundColor: "#ccc" }}>
          long-list
        </div>
      </div>
    );
  }
}

export default App;
