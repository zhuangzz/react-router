import React, { Component } from 'react';
import {HashRouter as Router , Route } from "react-router-dom"
import Home from "./Home/Home"
import Second from "./Second"
import Header from "./Header"
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route path="/" exact component={Home}></Route>
          <Route path="/Second" component={Second}></Route>
        </div>
      </Router>

    )
  }
}

export default App;
