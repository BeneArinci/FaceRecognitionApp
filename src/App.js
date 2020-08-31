import React, { Component } from 'react';
import './App.css';
import Clarifai from "clarifai";
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})}
    this.setState({route: route})
  }

  render() {
    const { route, isSignedIn, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {isSignedIn}/>
        { route === 'home' 
        ? <div> <Logo />
        <Rank />
        <ImageInputForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        <FaceRecognition box = {box} imageUrl = {imageUrl} />
        </div>
        : (route === 'signin') 
        ? <SignIn onRouteChange = {this.onRouteChange}/>
        : <Register onRouteChange = {this.onRouteChange}/>}
      </div>
    );
  } 
}

export default App;
