import React, { Component } from 'react';
import './App.css';
import Clarifai from "clarifai";
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: "850b253629c04f92b71132926ed9e0cb",
});

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
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        {/* <FaceRecognition /> */}
      </div>
    );
  } 
}

export default App;
