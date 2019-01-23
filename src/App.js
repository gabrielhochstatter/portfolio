import React, { Component } from 'react';
import Typed from 'typed.js'
import './App.scss';

class App extends Component {
  state = {
    showRest: false
  }

  componentDidMount () {
    const headerOptions = {
      strings: [`<b>GabrielHochstatter^200.</b>FrontEnd^150Developer^100(^100)`],
      typeSpeed: 30,
      showCursor: true,
      // onComplete: this.showRestOfCV
    }
    const whatIDoOptions = {
      strings: [`
        <b>What do I do?</b> I make web things. ^300 Mostly with React! ⚛️
        <br>
        <b>Where am I?</b> London, UK 🇬🇧
        <br>
        <br>
        Here's a bit of what I've done:
        <br>
        🤷‍♂️
      `],
      typeSpeed: 0,
      startDelay: 2900,
      showCursor: false
    }
    const typedHeader = new Typed('#typedHeader', headerOptions)
    const typedwhatIDo = new Typed('#whatIDo', whatIDoOptions)
  }

  showRestOfCV = () => {
    this.setState({
      showRest: true
    })
  }

  render () {
    return (
      <div className="App">
        <span id='typedHeader' className='typed-header' />
        <p id='whatIDo' />
        
      </div>
    );
  }
}

export default App;
