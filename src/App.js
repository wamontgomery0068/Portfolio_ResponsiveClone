import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "Nav">
          <div className = "Logo_Nav">
            <p className = "Logo_Text"> Start BootStrap </p>
          </div>
          <div className = "Links_Nav">
            <p className = "Links_Text"> SERVICES </p>
            <p className = "Links_Text"> PORTFOLIO </p>
            <p className = "Links_Text"> ABOUT </p>
            <p className = "Links_Text"> TEAM </p>
            <p className = "Links_Text"> CONTACT </p>
          </div>
        </div>
        <div className = "Header">
          <div className = "Top_Header">
            <p className = "Top_Text"> Welcome To Our Studio! </p>
          </div>
          <div className = "Middle_Header">
            <p className = "Middle_Text"> IT'S NICE TO MEET YOU </p>
          </div>
          <div className = "Bottom_Header">
            <p className = "Bottom_Text"> TELL ME MORE </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
