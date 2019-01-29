import React, { Component, Fragment } from 'react';

import './CV.scss'

export default class CV extends Component {

  render () {
    return (
      <Fragment>
        <div>
          <h2>💻 Experience</h2>
          <h3>MMT Digital / Vodafone UK - Front End Developer</h3>
          <h5><em>Sep 2018 - Present</em></h5>
          <p className='cv-text'>
            Worked on a client-side team based at Vodafone UK’s London office. 
            My team was responsible for improving conversion rates on their e-commerce site using data collected from analytics. 
            I worked closely not only with other developers but also with analytics specialists and UX designers to optimize customer journeys.
          </p>
          <p className='cv-text'>
            When it came to tech I wrote most of my code in ES6/7 JavaScript, using React for our framework and Jest and Enzyme for testing.
          </p>
          <p className='cv-text'>
            I also had a hand in making sure releases to production went smoothly by working with the DevOps teams to streamline the CI/CD processes used.
          </p>
          <h3>Maker's Academy - Full Stack Web Development Bootcamp</h3>
          <p className='cv-text'>3 Month intensive web-development course covering:</p>
          <ul className='cv-text'>
            <li>Javascript + assorted libraries and runtimes (React, Node, Vue.js & more)</li>
            <li>Ruby, Ruby on Rails</li>
            <li>TDD, unit and integration testing using a wide variety of frameworks and tools</li>
            <li>Deployment and Continuous Integration using Heroku/TravisCI/CircleCI</li>
          </ul>
        </div>
        <div>
          <h2>🛠 Skills:</h2>
          <p><strong>Stuff I use every day:</strong></p>
          <p className='cv-text'>
            ES6/7 JavaScript, React, Node, Express, Jest, Enzyme, MobX, HTML, CSS, SASS, CSS Modules, Webpack, Babel, Git
          </p>
          <p><strong>Stuff I also know a bit about:</strong></p>
          <p className='cv-text'>
            Ruby, Ruby on Rails, Sinatra, RSpec, Python, Flask, Django, Deployment/CI/CD with Heroku/Jenkins/TravisCI/AWS
          </p>
        </div>
        <div>
          <p className='cv-text'>If you want to know more or get in touch, check out my <a href='https://github.com/gabrielhochstatter'>GitHub</a> or <a href='https://www.linkedin.com/in/gabriel-hochstatter/'>LinkedIn</a></p>
        </div>
      </Fragment>
    )
  }
}