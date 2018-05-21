import React, { Component } from 'react';
import './App.css';
import Username from './Username';

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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { loggedInMessage }
        {
          /**
           * This is a shorthand for displaying or hiding a component,
           * if 'loggedIn' is false the next part of the if-statement
           * cannot continue and the component will not show. This is the same as 
           * saying true && true or false && false. Both must be true for the
           * component to show.
           */
          !this.state.loggedIn && <Username handleLogin={this.handleLogin} />
        }
    

        

      </div>
    );
  }
}

export default App;
