import React, { Component } from 'react';
import './App.css';
import Clarifai from "clarifai";
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

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
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imageUrl = {this.state.imageUrl} />
      </div>
    );
  } 
}

export default App;
