import React, { Component } from 'react';
import '../App.css';
import UpgradeContainer from './UpgradeContainer'
import Login from './Login';
import Autoclicker from './Autoclicker';
import IncreaseClickValue from './IncreaseClickValue';
import Laboratory from './Laboratory';
import EggFactory from './EggFactory';


class App extends Component {

  state = {
    loggedIn: false,
    username: '',
    counter: 0
  }

  handleLogin = (username) => {
    this.setState({ loggedIn: true, username: username });
  }

  handleUpgradeCosts = (cost) => {
    if(this.state.counter >= cost){
      this.setState({counter: this.state.counter - cost})
      return true;
    }
    return false;
  }

  handleCounterState =  (increaseValue) => {
    this.setState({counter: this.state.counter + increaseValue})
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
        { !this.state.loggedIn && <Login handleLogin={this.handleLogin} />}       

        { this.state.loggedIn &&
        <div> 
            <p>You have collected {this.state.counter} eggs </p>

            
              <IncreaseClickValue 
              handleCounterState={this.handleCounterState}
              handleUpgradeCosts={this.handleUpgradeCosts}
              counter={this.state.counter}/>

              <Autoclicker
              handleCounterState={this.handleCounterState}
              handleUpgradeCosts={this.handleUpgradeCosts}
              counter={this.state.counter}/>

              <Laboratory
              handleCounterState={this.handleCounterState}
              handleUpgradeCosts={this.handleUpgradeCosts}
              counter={this.state.counter}/>

              <EggFactory
              handleCounterState={this.handleCounterState}
              handleUpgradeCosts={this.handleUpgradeCosts}
              counter={this.state.counter}/>
           
          </div>
       }
        
      </div>
    );
  }
}

export default App;
