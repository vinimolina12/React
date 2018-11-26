import React, { Component } from 'react';
import Header from './components/Header';
import "./styles.css";
import Main from './pages/main';
import Routes from './routes';






class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Routes />
      
      </div>
    );
  }
}

export default App;
