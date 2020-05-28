import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import * as ways from './components/4waysToCreateComponent'
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";

function App() {
  return (
    <div id="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <p style={{ display: "none" }}>
        <ways.HelloWorldCC />
        <ways.HelloWorldConst />
        <ways.HelloWorldFC />
      </p>
    </div>
  );
}

export default App;
