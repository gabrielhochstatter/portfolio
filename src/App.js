import React, { Component } from 'react';
import Typed from 'typed.js'
import { Spring } from 'react-spring'

import CV from './components/CV'

import './App.scss';

class App extends Component {
  state = {
    showRest: false
  }

  componentDidMount () {
    const headerOptions = {
      strings: [`<b>GabrielHochstatter^200.</b>frontEnd^75Developer^100(^100)`],
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
        I've built front-end applications that are used by millions of people every month, here are some of the details:
        <br>
      `],
      typeSpeed: 0,
      startDelay: 2900,
      showCursor: false,
      onComplete: this.showRestOfCV
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
        
        {this.state.showRest && <Spring from={{opacity: 0}} to={{opacity: 1}}>
          {props => <div style={props}><CV /></div>}
        </Spring>}
      </div>
    );
  }
}

export default App;
