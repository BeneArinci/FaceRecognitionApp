import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: 'true',
        value_area: 500
      }
    } 
  }
  

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
