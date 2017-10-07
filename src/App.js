import React, { Component } from 'react';
import logo from './logo-full.svg';
import './App.css';
import Button from './Button';
import SchemeEditor from './SchemeEditor';

class App extends Component {
  render() {
    console.log(logo);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <div className="App-top-row">
            <div className="App-top-row-button">
              {this.renderButton('Spec')}
            </div>
            <div className="App-top-row-button">
              {this.renderButton('Javascript')}
            </div>
            <div className="App-top-row-button">
              {this.renderButton('Ruby')}
            </div>
            <div className="App-top-row-button">
              {this.renderButton('Rails')}
            </div>
          </div>
          <div className="App-editor">
            <SchemeEditor></SchemeEditor>
          </div>
        </main>
      </div>
    );
  }

  renderButton(text) {
    return <Button text={text}></Button>
  }
}

export default App;
