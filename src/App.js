/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#"> Home </a>
      <a href="#"> New feed </a>
      <a href="#"> Messages </a>
    </div>
  );
};

const Technologies = () => {
  return (
    <ul>
      <li>HTML</li>
      <li>HTML</li>
      <li>CSS</li>
    
      <li>JS</li>
      <li>React</li>
    </ul>
  );
};

export default App;
