import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header (props){
  return (
    <div>
      <h1>Header: {props.title}</h1>
      { props.subtitle ? <h2>Subtitle: {props.subtitle}</h2> : null}
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount () {
    console.log('The component will mount into the page. At this point there is no DOM ')
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header title='The first title' subtitle='1st'/>
        <Header title='The second title' subtitle='2nd'/>
        <Header title='The third title' subtitle='3rd'/>
        <Header title='The fourth title' />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
