import React, { Component } from "react";
import './styles/App.css';
import GeneralSection from "./components/GeneralSection";
import EducationalSection from "./components/EducationalSection";
import PracticalSection from "./components/PracticalSection";

function App() {
  return (
    <div className="App">
      <h1>CV App</h1>
      <GeneralSection/>
      <EducationalSection/>
      <PracticalSection/>
    </div>
  );
}

export default App;
