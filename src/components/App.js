import React, { Component } from 'react';
import '../App.css';
import Username from './Username';
import Counter from './Counter';
import Autoclicker from './Autoclicker';

class App extends Component {

  state = {
    loggedIn: false,
    username: ''
  }

  handleLogin = (username) => {
    this.setState({ loggedIn: true, username: username });
  }

  render() {
    let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> Welcome {this.state.username}, let's play! </p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{ loggedInMessage }</h1>
        </header>
        { !this.state.loggedIn && <Username handleLogin={this.handleLogin} />}
        <Counter/>
        <Autoclicker/>
      </div>
    );
  }
}

export default App;
