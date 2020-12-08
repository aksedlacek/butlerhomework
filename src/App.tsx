import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
  } from 'react-router-dom';
import logo from './logo.svg';
import {useSpring, animated} from 'react-spring'
import {Button} from 'react-bootstrap'
import pus from './assets/pus.PNG';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default class App extends React.Component<{}> {
  public render() {
    return (
        <div className="container-fluid">
          <div className="centreText">
            {}
              <img src={pus}></img>
              <Button variant={'outline-primary'}>Stuff</Button>
          </div>
        </div>
    )
  }
}
