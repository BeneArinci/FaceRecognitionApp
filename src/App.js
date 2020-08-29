import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageInputForm />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
