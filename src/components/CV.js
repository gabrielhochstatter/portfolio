import React, { Component, Fragment } from 'react';

import './CV.scss'

export default class CV extends Component {

  render () {
    return (
      <Fragment>
        <div>
          <h2>💻 Experience</h2>
          <section className='cv-section'>
            <h3>END. Clothing - Front End Developer</h3>
            <h5 className='cv-subheader'><em>Oct 2019 - present</em></h5>
            <p className='cv-text'>
              This is my current role, where I am in the process of leading the development of END's new React based checkout - replacing an older Magento implementation. 
              Throughout this process I have worn many hats, including but not limited to:
            <ul>
              <li>Writing a significant portion of the code (>80% or so) - all while ensuring performance, maintainability and test coverage.</li>
              <li>Taking into account all the edge cases that rear their heads when building a checkout that needs to work across over 70 different countries.</li>
              <li>Collaborating with the UX/Design team to ensure that their designs were translated to code effectively and working with them to resolve any UX concerns that arose.</li>
              <li>Keeping the CTO and other senior stakeholders updated on the progress of the project and working to quickly resolve any blockers.</li>
              <li>Working with the backend and mobile app teams to ensure consistency between platforms.</li>
              <li>Constructing a framework for the process of releasing new features to the checkout - leveraging CI and CD to ensure a (relatively) pain-free deployment experience</li>
            </ul>
            </p>
            <p className='cv-text'>
              In addition to the checkout I also helped with the migration of the main site over to a Next.js/React based app.
            </p>
            <p className='cv-text'>
              The core technologies I use here are <strong>React</strong> using <strong>Next.js</strong> for server-side rendering and <strong>Styled Components</strong> for styling. 
              We managed our state with a combination of <strong>Redux</strong> and React's Context system.
            </p>
            <p className='cv-text'>
              Testing was handled with <strong>Jest</strong> and <strong>Enzyme</strong> while everything was deployed using <strong>Google Cloud</strong> and <strong>Kubernetes.</strong>
            </p>
          </section>
          <section className='cv-section'>
            <h3>MMT Digital / Vodafone UK - Front End Developer</h3>
            <h5 className='cv-subheader'><em>Sep 2018 - Oct 2019</em></h5>
            <p className='cv-text'>
              Worked on a client-side team based at <strong>Vodafone UK</strong>’s London office. 
              My team was responsible for the broadband online sales journey, where we inherited an underperforming section of the site and turned it around leading to a nearly 70% jump in conversion. 
              We later added new features and became one of the first teams to adopt a cross-disciplinary model with front-end, back-end, design, QA and analytics working on the same team. 
            </p>
            <p className='cv-text'>
              The stack on the front end consisted of <strong>React</strong> with <strong>MobX</strong> for state management and <strong>Jest/Enzyme</strong> for testing, deployed via AWS.
            </p>
            <p className='cv-text'>
              Our team was one of the first to spearhead a new model of delivery, moving away from slow biweekly releases to a more agile approach where features would release to production as soon as they were ready. 
              I worked closely with the team lead, the delivery team and senior developers and stakeholders to develop this model.
            </p>
          </section>
          <h3>Maker's Academy - Full Stack Web Development Bootcamp</h3>
          <p className='cv-text'>3 Month intensive web-development course covering:</p>
          <ul className='cv-text'>
            <li>Javascript + assorted libraries and runtimes (React, Node, Vue.js & more)</li>
            <li>Ruby, Ruby on Rails</li>
            <li>TDD, unit and integration testing using a wide variety of frameworks and tools</li>
            <li>Deployment and Continuous Integration using Heroku/TravisCI/CircleCI</li>
          </ul>
        </div>
        <h2>🚇 tubestat.us</h2>
          <p className='cv-text'>Just type <code>curl tubestat.us</code> in your terminal and see!</p>
          <p className='cv-text'>
            Or alternatively <a href='http://tubestat.us' target='_blank' rel='noopener noreferrer'>visit it from your browser</a> or <a href='https://github.com/gabrielhochstatter/tubestat.us' target='_blank' rel='noopener noreferrer'>check out the code on GitHub!</a>
          </p>
        <div>
          <h2>🛠 Skills:</h2>
          <p><strong>Stuff I use every day:</strong></p>
          <p className='cv-text'>
            ES6/7 JavaScript, React, Redux, Jest, Enzyme, MobX, HTML, Styled Components, CSS, SASS, CSS Modules, Webpack, Babel, Git, Kubernetes
          </p>
          <p><strong>Stuff I also know a bit about:</strong></p>
          <p className='cv-text'>
            Node, Express, Ruby, Ruby on Rails, Sinatra, RSpec, Python, Flask, Django, Deployment/CI/CD with Heroku/Jenkins/TravisCI/AWS
          </p>
        </div>
        <div>
          <p className='cv-text'>If you want to know more or get in touch, check out my <a href='https://github.com/gabrielhochstatter'>GitHub</a> or <a href='https://www.linkedin.com/in/gabriel-hochstatter/'>LinkedIn</a></p>
        </div>
      </Fragment>
    )
  }
}