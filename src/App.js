import React, { Component } from "react";
import './styles/App.css';
import GeneralInfos from "./components/GeneralInfos";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

function App() {
  return (
    <div className="App">
      <h1>CV App</h1>
      <GeneralInfos/>
      <EducationalExp/>
      <PracticalExp/>
    </div>
  );
}

export default App;
