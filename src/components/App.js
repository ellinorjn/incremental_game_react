import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import GameView from './GameView';

class App extends Component {

  state = {
    loggedIn: false,
    username: ''
  }

  handleLogin = (username) => {
    this.setState({ loggedIn: true, username: username });
  }

  render() {
    let headerMessage = null;
    if(this.state.loggedIn){
      headerMessage = <h1 className="App-title">Welcome {this.state.username}, let's play!</h1>
    }else{
      headerMessage = <h1>Welcome to Egg-Picker!</h1>
    }
    
    return (
      <div className="App">
        <header className="App-header">{ headerMessage }</header>
          <div className="start-page">
            { !this.state.loggedIn && <Login handleLogin={this.handleLogin} />}
          </div> 
        { this.state.loggedIn && <GameView />}
      </div>
    );
  }
}

export default App;
